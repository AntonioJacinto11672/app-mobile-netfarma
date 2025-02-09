import { View, Text, SafeAreaView, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import IconVectorComponent, { IconType } from '@/components/IconVectorComponent'
import SearchComponent from '@/components/SearchComponent'
import CartComponent from '@/components/CartComponentes/CartComponent'
import OrderComponent from '@/components/CartComponentes/OrderComponent'
import EncomendaComponent from '@/components/CartComponentes/EncomendaComponent'
const components: any = [
  <CartComponent />,
  <OrderComponent />,
  <EncomendaComponent />
]

export default function Cart() {
  const [valueComponent, setValueComponent] = useState<number>(0)

  return (
    <SafeAreaView className='bg-white h-screen'>
      <SearchComponent />
      <ScrollView className=''>
        <Text>CartScreenDetailss</Text>
      </ScrollView>
    </SafeAreaView>
  )
}