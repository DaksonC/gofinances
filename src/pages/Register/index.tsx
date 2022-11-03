import React, {useState} from 'react';
import { Modal } from 'react-native'
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
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { CategorySelect } from '../CategorySelect';


export const Register = () => {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  });

  function handleTransactionTypeSelect(type: 'up' | 'down') {
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
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
          <CategorySelectButton 
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
        </Fields>
        <ButtonAdd title="Enviar" />
      </Form>
      <Modal visible={categoryModalOpen}>
        <CategorySelect 
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </Container>
  )
};