import React from 'react';
import { 
  Category, 
  Container, 
  Icon 
} from './styles';

interface CategorySelectProps {
  title: string;
}

export const CategorySelect = ({ title }: CategorySelectProps) => {
  return (
    <Container>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  )
};