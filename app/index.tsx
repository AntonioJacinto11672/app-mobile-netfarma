import { Redirect } from 'expo-router';
import { useAuth } from '../contexts/AuthContext';

export default function Index() {
  const { tokenLogeded } = useAuth();


    console.log("Token Loged", tokenLogeded)

    const token = localStorage.getItem('token');
    console.log("Token LocalStorage", token)

  if (tokenLogeded || token) {
    return <Redirect href="/(tabs)/home" />;
  }

  return <Redirect href="/(auth)/login" />;
}