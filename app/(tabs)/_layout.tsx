import { Tabs } from 'expo-router';
import { Fontisto, Ionicons } from '@expo/vector-icons';
import IconVectorComponent, { IconType } from '@/components/IconVectorComponent';
import { HapticTab } from '@/components/HapticTab';
import BlurTabBarBackground from '@/components/ui/TabBarBackground.ios';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { Colors } from '@/constants/Colors';

export default function TabsLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      headerShown: false,
      tabBarButton: HapticTab,
      tabBarBackground: BlurTabBarBackground,
      tabBarStyle: {
      }


    }}>
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: 'Início',
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="promotion"
        options={{
          title: 'Promoção',
          tabBarIcon: ({ color }) => <IconVectorComponent icon={{ value: { type: IconType.MaterialCommunityIcon, name: 'brightness-percent' }, size: 28, color: color }} />,
        }}
      />
      <Tabs.Screen
        name="products"

        options={{
          title: 'Produtos',
          tabBarIcon: ({ color }) => <> <Fontisto name="pills" size={24} color={color} /></>
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          headerTitle: 'Carrinho',
          tabBarLabel: 'Carrinho',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerTitle: 'Configurações',
          tabBarLabel: 'Configurações',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}