import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router';

export default function HomePagesLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='CartScreenDetails' />
    </Stack>
  )
}