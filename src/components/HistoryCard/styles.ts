import { RFValue } from 'react-native-responsive-fontsize';
import Styled from 'styled-components/native';

interface IContainerProps {
  color: string;
}

export const Container = Styled.View<IContainerProps>`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 13px 24px;
  border-radius: 5px;
  border-left-width: 5px;
  border-left-color: ${({ color }) => color};
  background-color: ${({ theme }) => theme.colors.shape};
  margin-bottom: 8px;  
`;

export const Title = Styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text_light};
`;

export const Amount = Styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.text_light};
`;