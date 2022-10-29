import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
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
} from './styles';

export const Dashboard = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/81385265?v=4' }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Dakson</UserName>
            </User>
          </UserInfo>
          <Icon name='power'/>
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
    </Container>
  );
}