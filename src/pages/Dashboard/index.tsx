import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  LogoutButton
} from './styles';
import { 
  ITransactionCardProps, 
  TransactionCard 
} from '../../components/TransactionCard';
import { HighlightCard } from '../../components/HighlightCard';

export interface IDataListProps extends ITransactionCardProps  {
  id: string;
}

export const Dashboard = () => {
  const [data, setData] = useState<IDataListProps[]>([]);

  async function laodTransactions() {
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    const transactionsFormatted: IDataListProps[] = 
    transactions.map((item: IDataListProps) => {
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
  }
  
  useEffect(() => { 
    laodTransactions() 
  }, []);

  return (
    <Container>
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
            <Icon name='power'/>
          </LogoutButton>
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard 
          type='up'
          title='Entradas'
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de abril'
        />
        <HighlightCard 
          type='down'
          title='Saídas'
          amount='R$ 1.259,00'
          lastTransaction='Última saída dia 03 de abril'
        />
        <HighlightCard 
          type='total'
          title='Total'
          amount='R$ 16.141,00'
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
  );
}