import React, { createContext, useContext } from 'react';
import * as AuthSession from 'expo-auth-session';

interface IAuthContextProps {
  children: React.ReactNode;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface ITypeError {
  message: string;
}

interface IAuthorizationResponse {
  params: {
    access_token: string;
  };
  type: string;
}

interface IAuthContextData {
  user: IUser;
  signInGoogle(): Promise<void>;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: IAuthContextProps) {
  const user = {
    id: '1',
    name: 'John Doe',
    email: 'teste@tesste.com',
  };

  async function signInGoogle() {
    try {
      const CLIENT_ID = '115747102246-mv10jkch57k2r0u6mde9h4bik213p1ea.apps.googleusercontent.com';
      const EXPO_REDIRECT_URI = AuthSession.makeRedirectUri({ useProxy: true });
      const RESPONSE_TYPE = 'token';
      const SCOPE = encodeURI('profile email');
      const BASE_URL = 'https://accounts.google.com/o/oauth2/v2/auth';

      const authUrl = `${BASE_URL}?client_id=${CLIENT_ID}&redirect_uri=${EXPO_REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = await AuthSession.startAsync({ authUrl }) as IAuthorizationResponse;

      if (type === 'success') {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
        const userInfo = await response.json();

        console.log(userInfo);
      }

    } catch (error) {
      const typeError = error as ITypeError;
      throw new Error(typeError.message);
    }
  }
  return (
    <AuthContext.Provider value={{ user, signInGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };