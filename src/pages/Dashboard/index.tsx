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
} from './styles';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';

export const Dashboard = () => {
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
          <TransactionCard 
            // type='positive'
            title='Desenvolvimento de site'
            amount='R$ 12.000,00'
            category={{
              key:'1',
              name: 'Vendas',
              icon: 'dollar-sign'
            }}
            date='13/04/2021'
          />
        </Transactions>
    </Container>
  );
}