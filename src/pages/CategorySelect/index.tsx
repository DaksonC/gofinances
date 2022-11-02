import React from 'react';
import { FlatList } from 'react-native';
import { ButtonAdd } from '../../components/Forms/ButtonAdd';
import { categories } from '../../utils/categories';
import { 
  Category, 
  Container, 
  Header, 
  Icon,
  Name, 
  Title,
  Separator,
  Footer
} from './styles';

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: string;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export const CategorySelect = ({
  category,
  setCategory,
  closeSelectCategory,
}: Props) => {
  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>
      <FlatList 
        data={categories}
        keyExtractor={item => item.key}
        style={{ flex: 1, width: '100%' }}
        renderItem={({ item }) => (
          <Category>
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
      <Footer>
        <ButtonAdd 
          title="Selecionar"          
        />
      </Footer>
    </Container>
  )
};