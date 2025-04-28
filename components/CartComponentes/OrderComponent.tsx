import { View, Text, FlatList } from 'react-native'
import React from 'react'
import OrderEmpty from './OrderEmpty'
import OrderFull from './OrderFull'
import CartFull from './CartFull';

export default function OrderComponent() {
  const data = [
    { id: 1, name: 'John Doe', age: 28 },
    { id: 2, name: 'Jane Smith', age: 34 },
    { id: 3, name: 'Alice Johnson', age: 45 },
  ];
  return (
    <>
      <View className="m-4">
        {/* Cabeçalho */}
        <View className="flex-row bg-gray-300 p-2 rounded-t-md">
          <Text className="flex-1 font-bold">#</Text>
          <Text className="w-[25%] font-bold text-center">Ref</Text>
          <Text className="w-[25%] font-bold text-center">Status</Text>
          <Text className="w-[25%] font-bold text-center">Acção</Text>
        </View>

        <FlatList
          data={data}
          renderItem={({ item, index }) => <OrderFull key={item.id} count={index} reference={item.name} status='pendente' />}
          ListEmptyComponent={<OrderEmpty />}
        />
      </View>
    </>
  )
}