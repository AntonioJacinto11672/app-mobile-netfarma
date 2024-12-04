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
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name='PromotionScreen'
        options={{
          title: 'Promoções',
          tabBarIcon: ({ color }) => <> <MaterialCommunityIcons name="brightness-percent" size={24} color={color} /></>
        }}
      />
       <Tabs.Screen
        name='ProductScreen'
        options={{
          title: 'Produtos',
          tabBarIcon: ({ color }) => <> <Fontisto name="pills" size={24} color={color} /></>
        }}
      />
      <Tabs.Screen
        name='CartScreen'
        options={{
          title: 'Carrinho',
          tabBarIcon: ({ color }) => <><Entypo name="shopping-cart" size={24} color={color} /></>
        }}
      />

      <Tabs.Screen
        name='SettingsScreen'
        options={{
          title: 'Definições',
          tabBarIcon: ({ color }) => <><MaterialIcons name="settings" size={24} color={color} /></>
        }}
      />



    </Tabs>
  );
}
