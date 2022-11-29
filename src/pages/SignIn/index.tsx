import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

import LogoSvg from "../../assets/logo.svg";
import GoogleSvg from "../../assets/google.svg";
import AppleSvg from "../../assets/apple.svg";

import {
  Container,
  Title,
  Header,
  Text,
  SignInTitle,
  Footer,
  ButtonWrapper,
} from "./styles";
import { SignInSocialButton } from "../../components/SignInSocialButton";
import { useAuth } from "../../Hooks/auth";
import { Alert } from "react-native";


export function SignIn() {
  const { signInGoogle } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      await signInGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível conectar a conta Google');
    }
  }

  return (
    <Container>
      <Header>
        <Title>
          <LogoSvg
            width={RFValue(120)}
            height={RFValue(68)}
          />
          <Text>
            Controle suas {"\n"}
            finanças de forma {"\n"}
            muito simples
          </Text>
        </Title>
        <SignInTitle>
          Faça seu login com {"\n"}
          uma das contas abaixo
        </SignInTitle>
      </Header>
      <Footer>
        <ButtonWrapper>
          <SignInSocialButton
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={handleSignInWithGoogle}
          />
          <SignInSocialButton
            title="Entrar com Apple"
            svg={AppleSvg}
            onPress={() => { }}
          />
        </ButtonWrapper>
      </Footer>
    </Container>
  );
}