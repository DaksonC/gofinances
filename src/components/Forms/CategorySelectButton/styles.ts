import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RectButton  } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RectButton).attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 18px 16px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.shape};
  margin: 16px 0;

`;

export const Category = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text_light};
  font-size: ${RFValue(20)}px;
`;