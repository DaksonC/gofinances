import React from 'react';
import { 
  Container, 
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName, 
  Date
} from './styles';

export interface ITransactionCardProps {
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: [
    icon: string,
    name: string,
  ];
  date: string;
}
interface Data {
  data: ITransactionCardProps;
}

export const TransactionCard = ({ data }: Data) => {
  return (
    <Container>
      <Title>
        {data.title}
      </Title>
      <Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Amount>
      <Footer>
        <Category>
          <Icon name={data.category[0]} />
          <CategoryName>
            {data.category[1]}
          </CategoryName>
        </Category>
        <Date>
          {data.date}
        </Date>
      </Footer>
    </Container>
  )
};