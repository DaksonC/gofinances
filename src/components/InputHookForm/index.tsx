import React from 'react';
import { TextInputProps } from 'react-native';
import { 
  Control, 
  Controller, 
  DeepRequired, 
  FieldError, 
  FieldErrorsImpl, 
  Merge 
} from 'react-hook-form';
import { Container, Error } from './styles';
import { Input } from '../Forms/Input';

interface Props extends TextInputProps {
  name: string;
  control: Control;
  error?: Merge<FieldError, FieldErrorsImpl<DeepRequired<any>>> | any;
}

export const InputHookForm = ({
  name,
  control,
  error,
  ...rest
}: Props) => {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input 
            onChangeText={onChange}
            value={value}
            {...rest} 
          />
        )}
        name={name}
      />
      { error && <Error>{error}</Error> }
    </Container>
  )
};