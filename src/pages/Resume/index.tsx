import { ptBR } from 'date-fns/locale';
import { VictoryPie } from 'victory-native';
import { ActivityIndicator } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { addMonths, subMonths, format } from 'date-fns';
import { RFValue } from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  ChartContainer,
  Container,
  Content,
  Header,
  LoadContainer,
  Month,
  MonthSelect,
  MonthSelectButton,
  MonthSelectIcon,
  Title
} from "./styles";
import theme from '../../global/styles/theme';
import { categories } from '../../utils/categories';
import { HistoryCard } from '../../components/HistoryCard';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useFocusEffect } from '@react-navigation/native';

interface ITransactionData {
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface ICategoryData {
  key: string;
  name: string;
  total: number;
  totalFormatted: string;
  color: string;
  percent: string;
}

export function Resume() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [totalByCategories, setTotalByCategories] = useState<ICategoryData[]>([]);

  function handleDateChange(action: 'next' | 'prev') {
    setIsLoading(true);

    if (action === 'next') {
      setSelectedDate(addMonths(selectedDate, 1));
    } else {
      setSelectedDate(subMonths(selectedDate, 1));
    }
  }

  async function loadData() {
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    const expensives = responseFormatted.filter((expensive: ITransactionData) =>
      expensive.type === 'negative'
      && new Date(expensive.date).getMonth() === selectedDate.getMonth()
      && new Date(expensive.date).getFullYear() === selectedDate.getFullYear()
    );

    const expensivesTotal = expensives.reduce(
      (acumulator: number, expensive: ITransactionData) => {
        return acumulator + Number(expensive.amount);
      }, 0);

    const totalCategory: ICategoryData[] = [];

    categories.forEach(category => {
      let categorySum = 0;

      expensives.forEach((expensive: ITransactionData) => {
        if (expensive.category === category.key) {
          categorySum += Number(expensive.amount);
        }
      });

      if (categorySum > 0) {
        const totalFormatted = categorySum
          .toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          });

        const percent = `${(categorySum / expensivesTotal * 100).toFixed(0)}%`;

        totalCategory.push({
          key: category.key,
          name: category.name,
          color: category.color,
          total: categorySum,
          totalFormatted,
          percent,
        });
      }
    });

    setTotalByCategories(totalCategory);
    setIsLoading(false);
  }

  useEffect(() => {
    loadData();
  }, [selectedDate]);

  useFocusEffect(useCallback(() => {
    loadData();
  }, []));

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>
      {
        isLoading ?
          <LoadContainer>
            <ActivityIndicator color={theme.colors.primary} size="large" />
          </LoadContainer> :
          <Content
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 24,
              paddingBottom: useBottomTabBarHeight()
            }}
          >
            <MonthSelect>
              <MonthSelectButton onPress={() => handleDateChange('prev')}>
                <MonthSelectIcon name="chevron-left" />
              </MonthSelectButton>
              <Month>
                {
                  format(selectedDate, 'MMMM, yyyy', { locale: ptBR })
                }
              </Month>
              <MonthSelectButton onPress={() => handleDateChange('next')}>
                <MonthSelectIcon name="chevron-right" />
              </MonthSelectButton>
            </MonthSelect>
            <ChartContainer>
              <VictoryPie
                data={totalByCategories}
                colorScale={totalByCategories.map(category => category.color)}
                style={{
                  labels: {
                    fontSize: RFValue(18),
                    fontWeight: 'bold',
                    fill: 'white'
                  }
                }}
                labelRadius={70}
                x="percent"
                y="name"
              />
            </ChartContainer>
            {
              totalByCategories.map(item => (
                <HistoryCard
                  key={item.key}
                  title={item.name}
                  amount={item.totalFormatted}
                  color={item.color}
                />
              ))
            }
          </Content>
      }
    </Container>
  )
}