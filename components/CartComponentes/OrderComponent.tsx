import { View, Text, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import OrderEmpty from './OrderEmpty'
import OrderFull, { OrderFullProps, OrdersType } from './OrderFull'
import CartFull from './CartFull';
import { useAuth } from '@/contexts/AuthContext';
import OrderService from '@/api/services/Order.service';


export default function OrderComponent() {
  const data = [
    { id: 1, name: 'John Doe', age: 28 },
    { id: 2, name: 'Jane Smith', age: 34 },
    { id: 3, name: 'Alice Johnson', age: 45 },
  ];

  const { user } = useAuth()
  const [orders, setOrders] = useState<OrderFullProps[]>([])

  useEffect(() => {
    getOrder()
  }, [user])

  const getOrder = async () => {
    const orderService = new OrderService()
    const resultOrder = await orderService.getOrderByUserId(user.id)
    
    if(resultOrder) {
      const orderValues = resultOrder as any
      setOrders(orderValues)
      console.log("Order Values", orderValues)
      
    }

  }
  return (
    <>
      <View className="m-4">
        {/* Cabeçalho */}
        <View className="flex-row bg-gray-300 p-2 rounded-t-md">
          <Text className="flex-1 font-bold  text-[#00665e]">#</Text>
          <Text className="w-[25%] font-bold text-center text-[#00665e]">Ref</Text>
          <Text className="w-[25%] font-bold text-center  text-[#00665e]">Total</Text>
          <Text className="w-[25%] font-bold text-center  text-[#00665e]">estado</Text>
          <Text className="w-[25%] font-bold text-center  text-[#00665e]">Imposto a pagar</Text>
          <Text className="w-[25%] font-bold text-center  text-[#00665e]">Imposto de taxa</Text>
          <Text className="w-[25%] font-bold text-center  text-[#00665e]">Acção</Text>
        </View>

       {/*  <FlatList
          data={orders}
          renderItem={({ item, index }) => <OrderFull key={item.items.id} count={index}  items={item.items} />}
          ListEmptyComponent={<OrderEmpty />}
        /> */}

        <ScrollView>
          {orders.length > 0 ? (
            orders.map((item, index) => (
              <OrderFull key={item.id} count={index} items={item} />
            ))
          ) : (
            <OrderEmpty />
          )}
        </ScrollView>
      </View>
    </>
  )
}