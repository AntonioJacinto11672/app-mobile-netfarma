import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import IconVectorComponent, { IconType } from '@/components/IconVectorComponent';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
        }


      }}>
      <Tabs.Screen
        name="(homePages)"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="PromotionScreen"
        options={{
          title: 'Promoção',
          tabBarIcon: ({ color }) => <IconVectorComponent icon={{ value: { type: IconType.MaterialCommunityIcon, name: 'brightness-percent' }, size: 28, color: color }} />,
        }}
      />

      <Tabs.Screen
        name="ProductScreen"
        options={{
          title: 'Produtos',
          tabBarIcon: ({ color }) => <IconVectorComponent icon={{ value: { type: IconType.FontistoIcon, name: 'pills' }, size: 28, color: color }} />,
        }}
      />

      <Tabs.Screen
        name="CartScreen"
        options={{
          title: 'Carrinho',
          tabBarIcon: ({ color }) => <IconVectorComponent icon={{ value: { type: IconType.EntypoIcon, name: 'shopping-cart' }, size: 28, color: color }} />,
        }}
      />


      <Tabs.Screen
        name="SettingsScreen"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color }) => <IconVectorComponent icon={{ value: { type: IconType.MaterialIcon, name: 'settings' }, size: 28, color: color }} />,
        }}
      />

    </Tabs>
  );
}
