import React from 'react';
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
} from './styles';
import { HighlightCard } from '../../components/HighlightCard';
import { ITransactionCardProps, TransactionCard } from '../../components/TransactionCard';

export interface IDataListProps extends ITransactionCardProps  {
  id: string;
}

export const Dashboard = () => {
  const data: IDataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title:'Desenvolvimento de site',
      amount:'R$ 12.000,00',
      category:[
        'dollar-sign',
        'Vendas'
      ],
      date:'13/04/2021'
    },
    {
      id: '2',
      type: 'negative',
      title:'Hamburgueria Pizzy',
      amount:'R$ 59,00',
      category:[
        'coffee',
        'Alimentação'
      ],
      date:'13/04/2021'
    },
    {
      id: '3',
      type: 'negative',
      title:'Aluguel do apartamento',
      amount:'R$ 1.200,00',
      category:[
        'shopping-bag',
        'Casa'
      ],
      date:'13/04/2021'
    },
]

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
          <Icon name='power'/>
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