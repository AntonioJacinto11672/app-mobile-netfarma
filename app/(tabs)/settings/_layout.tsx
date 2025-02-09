import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router';

export default function SettingsLayout() {
    return (
        <Stack screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='index' options={{ headerShown: false, title: "Configurações" }} />
        </Stack>
    )
}