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

export interface Category {
  key: string;
  name: string;
  icon: string;
}

export interface TransactionCardProps {
  // type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: Category;
  date: string;
}

export const TransactionCard = ({
  // type,
  title,
  amount,
  category,
  date
}: TransactionCardProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
      <Footer>
        <Category>
          <Icon name='dollar-sign' />
          <CategoryName>{category}</CategoryName>
        </Category>
        <Date>{date}</Date>
      </Footer>
    </Container>
  )
};