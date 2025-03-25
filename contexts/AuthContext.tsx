import { UserType } from '@/utils/userType';
import { useRouter } from 'expo-router';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { set } from 'react-hook-form';

interface AuthContextType {
  user: UserType;
  tokenLogeded: string;
  login: (userData: UserType, token: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [tokenLogeded, setTokenLogeded] = useState<string>('');
  const [user, setUser] = useState<UserType>({ id: '', email: '', userName: '', phoneNumber: '', roleId: '', password: '' });


  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const login = async (userData: UserType, token: string) => {

    // informações do Usuario logado
    console.log("User Info 2", userData)
    // Simulação de login
    setUser({ id: userData.id, email: userData.email, userName: userData.userName, phoneNumber: userData.phoneNumber, roleId: userData.roleId, password: userData.password });
    localStorage.setItem('user', JSON.stringify(userData)); // Salva o usuário no localStorage

    localStorage.setItem('token', token); // Salva o token no localStorage
    setTokenLogeded(token);
  };

  const logout = () => {
    setUser({ id: '', email: '', userName: '', phoneNumber: '', roleId: '', password: '' });
    localStorage.removeItem('user');
    setTokenLogeded('');
    localStorage.removeItem('token');
    router.replace('/(auth)/login');
  };

  return (
    <AuthContext.Provider value={{ user, tokenLogeded, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}