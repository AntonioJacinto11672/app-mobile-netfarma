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
      <FlatList
        data={cartProducts}
        renderItem={({ item }) => <CartFull key={item.id} item={item} />}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<CartEmpty />}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        
        style={{ marginHorizontal: 10, marginTop: 10 }}
      />
    </View>
  )
}