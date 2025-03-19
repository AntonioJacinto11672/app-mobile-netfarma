import { Redirect } from 'expo-router';
import { useAuth } from '../contexts/AuthContext';

export default function Index() {
  const { user, logout, login } = useAuth();
  logout();

  login("antjacinto1672@gmail.com", "123456");

  if (user.id !== 0 && user.email !== '') {
    return <Redirect href="/(tabs)/home" />;
  }

  return <Redirect href="/(auth)/login" />;
}