import { Feather } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface IconProps {
  type: 'up' | 'down';
}
interface ContainerProps {
  isActive: boolean;
  type: 'up' | 'down';
}

export const Container = styled.View<ContainerProps>`
  width: 48%;
  border-radius: 5px;
  
  ${({ isActive }) => isActive 
    ? css`border: 1.5px solid ${({ theme }) => theme.colors.background};`
    : css`border: 1.5px solid ${({ theme }) => theme.colors.shape};`
  }
  ${({ isActive, type }) => isActive && type === 'up' && css`
    background-color: ${({ theme }) => theme.colors.success_light};
  `}
  ${({ isActive, type }) => isActive && type === 'down' && css`
  background-color: ${({ theme }) => theme.colors.attention_light};
  `}
`;

export const ButtonType = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 45px;
`;

export const Icon = styled(Feather)<IconProps>`
  margin-right: 12px;
  font-size: ${RFValue(24)}px;
  color: ${({ theme, type }) =>
    type === 'up' ? theme.colors.success : theme.colors.attention
  };
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
