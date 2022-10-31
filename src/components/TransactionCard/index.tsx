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

interface TransactionCardProps {
  title: string;
  amount: string;
  category: [
    icon: string,
    name: string,
  ];
  date: string;
}

export const TransactionCard = ({
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
          <Icon name={category[0]} />
          <CategoryName>{category[1]}</CategoryName>
        </Category>
        <Date>{date}</Date>
      </Footer>
    </Container>
  )
};