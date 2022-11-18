import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled(GestureHandlerRootView)`
  width: 100%;
  height: ${RFValue(113)}px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text_light};
`;