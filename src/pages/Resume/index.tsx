import React, { useEffect, useState } from 'react';
import { HistoryCard } from '../../components/HistoryCard';
import { Container, Content, Header, Title } from "./styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { categories } from '../../utils/categories';

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
  total: string;
  color: string;
}

export function Resume() {
  const [totalByCategories, setTotalByCategories] = useState<ICategoryData[]>([]);

  async function loadData() {
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    const expensives = responseFormatted.filter((expensive: ITransactionData) =>
      expensive.type === 'negative');

    const totalCategory: ICategoryData[] = [];

      categories.forEach(category => {
        let categorySum = 0;

        expensives.forEach((expensive: ITransactionData) => {
          if (expensive.category === category.key) {
            categorySum += Number(expensive.amount);
          }
        });

        if (categorySum > 0) {
          const total = categorySum
            .toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            });
          totalCategory.push({
            key: category.key,
            name: category.name,
            color: category.color,
            total,
          });
        }
      });

      setTotalByCategories(totalCategory);
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>
      <Content>
        {
          totalByCategories.map(item => (
            <HistoryCard 
              key={item.key}
              title={item.name}
              amount={item.total}
              color={item.color}
            />
          ))
        }
      </Content>
    </Container>
  )
}