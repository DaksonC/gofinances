import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {
  Container,
  Header,
  UserWrapper,
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
  LogoutButton,
  LoadContainer
} from './styles';
import {
  ITransactionCardProps,
  TransactionCard
} from '../../components/TransactionCard';
import { HighlightCard } from '../../components/HighlightCard';
import { useTheme } from 'styled-components';

export interface IDataListProps extends ITransactionCardProps {
  id: string;
}

interface IHighlightProps {
  amount: string;
}

interface IHighlightData {
  entries: IHighlightProps;
  expensives: IHighlightProps;
  total: string;
  lastTransaction: string;
}

export const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<IDataListProps[]>([]);
  const [HighlightCardsData, setHighlightCardsData] = useState<IHighlightData>({} as IHighlightData);

  const theme = useTheme();

  async function laodTransactions() {
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    let entiesTotal = 0;
    let expensiveTotal = 0;

    const transactionsFormatted: IDataListProps[] =
      transactions.map((item: IDataListProps) => {

        if (item.type === 'positive') {
          entiesTotal += Number(item.amount);
        } else {
          expensiveTotal += Number(item.amount);
        }
        const amount = Number(item.amount).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        });

        const date = Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit'
        }).format(new Date(item.date));

        return {
          id: item.id,
          type: item.type,
          name: item.name,
          amount,
          category: item.category,
          date,
        }
      });

    setData(transactionsFormatted);
    setHighlightCardsData({
      entries: {
        amount: entiesTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }),
      },
      expensives: {
        amount: expensiveTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })
      },
      total: (entiesTotal - expensiveTotal).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }),
      lastTransaction: new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
      })
    });
    setIsLoading(false);
  }


  useEffect(() => {
    laodTransactions()
  }, []);

  useFocusEffect(useCallback(() => {
    laodTransactions();
  }, []));

  return (
    <>
      {
        isLoading 
        ? <LoadContainer>
            <ActivityIndicator color={theme.colors.line} size='large' />
        </LoadContainer> 
        : <Container>
          <Header>
            <UserWrapper>
              <UserInfo>
                <Photo
                  source={
                    {
                      uri: 'https://avatars.githubusercontent.com/u/81385265?v=4'
                    }
                  }
                />
                <User>
                  <UserGreeting>Olá,</UserGreeting>
                  <UserName>Dakson</UserName>
                </User>
              </UserInfo>
              <LogoutButton >
                <Icon name='power' />
              </LogoutButton>
            </UserWrapper>
          </Header>
          <HighlightCards>
            <HighlightCard
              type='up'
              title='Entradas'
              amount={HighlightCardsData.entries?.amount}
              lastTransaction='Última entrada dia 13 de abril'
            />
            <HighlightCard
              type='down'
              title='Saídas'
              amount={HighlightCardsData.expensives?.amount}
              lastTransaction='Última saída dia 03 de abril'
            />
            <HighlightCard
              type='total'
              title='Total'
              amount={HighlightCardsData.total}
              lastTransaction='01 à 16 de abril'
            />
          </HighlightCards>
          <Transactions>
            <Title>Listagem</Title>
            <TransactionList
              data={data}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => <TransactionCard data={item} />}
            />
          </Transactions>
        </Container>
      }
    </>
  );
}