import React, { createContext, useContext } from 'react';

interface IAuthContextProps {
  children: React.ReactNode;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface IAuthContextData {
  user: IUser;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: IAuthContextProps) {
  const user = {
    id: '1',
    name: 'John Doe',
    email: 'teste@tesste.com',
  };
  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };