import React from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';
import { Input } from '../Forms/Input';
import { Container } from './styles';

interface Props extends TextInputProps {
  name: string;
  control: Control;
}

export const InputHookForm = ({
  name,
  control,
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
    </Container>
  )
};