import { View, Text } from 'react-native'
import React from 'react'
import CartEmpty from './CartEmpty'
import CartFull from './CartFull'

export default function CartComponent() {
  return (
    <View>
      <CartFull />
    </View>
  )
}