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

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``;