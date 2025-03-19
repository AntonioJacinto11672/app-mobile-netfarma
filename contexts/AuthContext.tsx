import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserType } from '../utils/userType';
interface AuthContextType {
  user: UserType | null;
  login: ({ id, email, userName, phoneNumber, roleId, password }: UserType) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const loadUserFromStorage = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };

    loadUserFromStorage();
  }, []);


  const login = async ({ id, email, userName, phoneNumber, roleId, password }: UserType) => {
    // Simulação de login

    //setUser({ id: 1, email });
    const loggedInUser = { id, email, userName, phoneNumber, roleId, password };
    setUser(loggedInUser);
    await AsyncStorage.setItem('user', JSON.stringify(loggedInUser));

  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
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