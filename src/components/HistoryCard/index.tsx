import { Amount, Container, Title } from "./styles";

interface IHistoryCardProps {
  title: string;
  amount: string;
  color: string;
}

export function HistoryCard({ title, amount, color }: IHistoryCardProps) {
  return (
    <Container color={color}>
        <Title>{title}</Title>
        <Amount>{amount}</Amount>
    </Container>    
  )
}