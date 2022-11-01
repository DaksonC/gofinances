import React, {useState} from 'react';
import { 
  Container, 
  Fields, 
  Form, 
  Header, 
  Title, 
  TransactionsTypes
} from './styles';
import { Input } from '../../components/Forms/Input';
import { ButtonAdd } from '../../components/Forms/ButtonAdd';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';


export const Register = () => {
  const [transactionType, setTransactionType] = useState('');

  function handleTransactionTypeSelect(type: 'up' | 'down') {
    setTransactionType(type);
  }

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
          <TransactionsTypes>
            <TransactionTypeButton 
              title="Entrada"
              type="up"
              onPress={() => handleTransactionTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton 
              title="Saída"
              type="down"
              onPress={() => handleTransactionTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionsTypes>
        </Fields>
        <ButtonAdd title="Enviar" />
      </Form>
    </Container>
  )
};