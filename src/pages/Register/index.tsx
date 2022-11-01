import React from 'react';
import { 
  Container, 
  Fields, 
  Form, 
  Header, 
  Title 
} from './styles';
import { Input } from '../../components/Forms/Input';
import { ButtonAdd } from '../../components/Forms/ButtonAdd';


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
        <ButtonAdd title="Enviar" />
      </Form>
    </Container>
  )
};