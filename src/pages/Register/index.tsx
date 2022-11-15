import React, {useState,useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { 
  Alert,
  Keyboard, 
  Modal, 
} from 'react-native'

import * as yup from "yup";
import  uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

interface NavigationProps {
  navigate: (screen: string) => void;
}

const schema = yup.object({
  name: yup.string()
  .required('Nome é obrigatório !!'),
  amount: yup.number()
  .positive('O valor não pode ser negativo.')
  .typeError('Informe um valor númerico.')
  .required('Preço é obrigatório !!'),
}).required();

export const Register = () => {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  
  const dataKey = '@gofinances:transactions';

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  });

  const navigation = useNavigation<NavigationProps>();

  const { control, handleSubmit, formState:{ errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  function handleTransactionTypeSelect(type: 'positive' | 'negative') {
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }

  async function handleRegister (form: FormData) {
    if(!transactionType)
      return Alert.alert('Selecione o tipo da transação');

    if(category.key === 'category')
      return Alert.alert('Selecione a categoria');
      
    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      type: transactionType,
      category: category.key,
      date: new Date()
    }

    try{
      const dataStorage = await AsyncStorage.getItem(dataKey);
      const currentData = dataStorage ? JSON.parse(dataStorage) : [];

      const dataFormatted = [
        ...currentData,
        newTransaction
      ]

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

      reset();
      setTransactionType('');
      setCategory({
        key: 'category',
        name: 'Categoria'
      });

      navigation.navigate('Listagem');

    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível salvar');
    }
  }

  useEffect(() => {
    async function loadData() {
      const data = await AsyncStorage.getItem(dataKey);
      console.log(JSON.parse(data!));
    }

    loadData();
  }, []);

  // Remove histótico de transações
  // useEffect(() => {
  //   AsyncStorage.removeItem(dataKey);
  // }, []);

  return (
    <TouchableWithoutFeedback 
      onPress={Keyboard.dismiss}
      containerStyle={{flex: 1}}
      style={{flex: 1}}
    >
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
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputHookForm 
              placeholder="Preço" 
              placeholderTextColor={'#7A7A80'}
              name="amount"
              control={control}
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
            />
            <TransactionsTypes>
              <TransactionTypeButton 
                title="Entrada"
                type="up"
                onPress={() => handleTransactionTypeSelect('positive')}
                isActive={transactionType === 'positive'}
              />
              <TransactionTypeButton 
                title="Saída"
                type="down"
                onPress={() => handleTransactionTypeSelect('negative')}
                isActive={transactionType === 'negative'}
              />
            </TransactionsTypes>
            <CategorySelectButton 
              title={category.name}
              onPress={() => handleOpenSelectCategoryModal()}
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
    </TouchableWithoutFeedback>
  )
};