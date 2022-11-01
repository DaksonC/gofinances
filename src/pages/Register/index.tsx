import React from 'react';
import { 
  Container, 
  Fields, 
  Form, 
  Header, 
  Title 
} from './styles';
import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Button';

export const Register = () => {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input 
            placeholder="Nome" 
            placeholderTextColor={'#7A7A80'}
          />
          <Input 
            placeholder="Preço" 
            placeholderTextColor={'#7A7A80'}  
          />
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  )
};