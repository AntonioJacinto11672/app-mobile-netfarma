import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router';

export default function AuthLayout() {
    return (
        <Stack screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='login' options={{ headerShown: false, title: "Register" }} />
            <Stack.Screen name='register' options={{ headerShown: false, title: "Register" }}/>
        </Stack>
    )
}