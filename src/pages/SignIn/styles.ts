import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 70%;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: flex-end;
  align-items: center;
`;

export const Title = styled.View`
  align-items: center; 
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(30)}px;
  text-align: center;
  margin-top: 45px;
`;

export const SignInTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 67px;
`;

export const Footer = styled.View`
  width: 100%;
  height: 30%;
  background-color: ${({ theme }) => theme.colors.secondary_light};
`;

export const ButtonWrapper = styled.View`
  margin-top: ${RFValue(-40)}px;
  padding: 0 32px;
  justify-content: space-between;
`;
