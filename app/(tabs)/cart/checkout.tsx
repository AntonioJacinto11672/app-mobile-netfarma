import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HomeHeader from '@/components/ui/HomeHeader'
import { Link, useRouter } from 'expo-router'
import { ThemedText } from '@/components/ThemedText'
import TouchableFixed from '@/components/ui/TouchableFixed'

export default function checkout() {
  const router = useRouter();
  return (
    <SafeAreaView className='bg-white h-full'>
      <HomeHeader title='Checkout' />
      <View>
        <Text className='font-bold'>Checkout</Text>
        <Link href="/(tabs)/cart" className=' px-15 py-15'>
          <ThemedText type="link">Go to back!</ThemedText>
        </Link>
      </View>
      <TouchableFixed title='Próximo Passo' onPress={() => { router.replace("/cart/PreparingOrderScreen") }} />
    </SafeAreaView>
  )
}