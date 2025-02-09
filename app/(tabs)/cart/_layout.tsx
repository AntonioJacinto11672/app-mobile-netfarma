import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router';

export default function CartLayout() {
    return (
        <Stack screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='index' options={{ headerShown: false, title: "cart" }} />
            <Stack.Screen name='checkout' options={{ headerShown: false, title: "Checkout" }}/>
        </Stack>
    )
}