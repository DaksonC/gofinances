import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from 'react-native'
import { 
  Container, 
  Fields, 
  Form, 
  Header, 
  Title, 
  TransactionsTypes
} from './styles';
import { CategorySelect } from '../CategorySelect';
import { ButtonAdd } from '../../components/Forms/ButtonAdd';
import { InputHookForm } from '../../components/InputHookForm';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';

interface FormData {
  [name: string]: string;
}

export const Register = () => {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  });

  const { control, handleSubmit } = useForm();

  function handleTransactionTypeSelect(type: 'up' | 'down') {
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }

  const handleRegister = (form: FormData) => {
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }
    console.log(data);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <InputHookForm 
            placeholder="Nome" 
            placeholderTextColor={'#7A7A80'}
            name="name"
            control={control}
          />
          <InputHookForm 
            placeholder="Preço" 
            placeholderTextColor={'#7A7A80'}
            name="amount"
            control={control}
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
        <ButtonAdd 
          title="Enviar" 
          onPress={handleSubmit(handleRegister)}  
        />
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