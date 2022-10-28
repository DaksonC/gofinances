import { 
  Container,
  Header, 
  UserWrapper,
  Photo, 
  User, 
  UserGreeting, 
  UserInfo, 
  UserName
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
        </UserWrapper>
      </Header>
    </Container>
  );
}