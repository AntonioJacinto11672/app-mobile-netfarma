import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router';
import { Redirect } from 'expo-router';
import { useAuth } from '@/contexts/AuthContext';

export default function AuthLayout() {
    /* Verificar usuario Logado */
    const { tokenLogeded } = useAuth();


    console.log("Token Loged", tokenLogeded)

    const token = localStorage.getItem('token');
    //console.log("Token LocalStorage", token)

    if (tokenLogeded || token) {
        return <Redirect href="/(tabs)/home" />;
    }

    return (

        <Stack screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='login' options={{ headerShown: false, title: "Register" }} />
            <Stack.Screen name='register' options={{ headerShown: false, title: "Register" }} />
        </Stack>
    )
}