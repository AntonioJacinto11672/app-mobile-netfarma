import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react'
import CartEmpty from './CartEmpty'
import CartFull from './CartFull'
import IconVectorComponent, { IconType } from '../IconVectorComponent'
import { FormatPrice } from '@/utils/FormPrice'
import { useCart } from '@/contexts/CartContext'

export default function CartComponent() {
  const { cartProducts } = useCart()
  return (
    <View>
      <View className="flex-row justify-between mx-5 text-xs gap-4 pb-2  mt-8 font-semibold ">
        <View className="flex-col ">PRODUCTO</View>
        <View className="">PREÇO</View>
        <View className="">QUANTIDADE</View>
        <View className="">TOTAL</View>
      </View>

      

      <FlatList
        data={cartProducts}
        renderItem={({ item }) => <CartFull key={item.id} item={item} />}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<CartEmpty />}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      
      />
    </View>
  )
}