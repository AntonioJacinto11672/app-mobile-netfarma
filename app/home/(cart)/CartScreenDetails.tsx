import { View, Text, SafeAreaView, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import IconVectorComponent, { IconType } from '@/components/IconVectorComponent'
import SearchComponent from '@/components/SearchComponent'
import CartComponent from '@/components/CartComponentes/CartComponent'
import OrderComponent from '@/components/CartComponentes/OrderComponent'
import EncomendaComponent from '@/components/CartComponentes/EncomendaComponent'
const components:any = [
  <CartComponent />,
  <OrderComponent />,
  <EncomendaComponent />
]

export default function CartScreenDetails() {
  const [valueComponent, setValueComponent] = useState<number>(0)

  return (
    <SafeAreaView className='bg-white h-screen'>
      <SearchComponent />
      <ScrollView className=''>

        <View className=' flex-row  justify-between items-center  border-b border-gray-200 my-4 px-5'>
          <TouchableOpacity className={`flex-row items-center gap-2   ${valueComponent === 0 ? 'border-b-2 border-[#00665e]' : ''}`} onPress={() => setValueComponent(0)}>
            <IconVectorComponent icon={{
              value: {
                type: IconType.FontAwesomeIcon,
                name: "shopping-cart"
              },
              size: 19,
              color: valueComponent === 0 ? '#00665e' : 'gray'
            }} />
            <Text className={` text-md font-semibold my-2 ${valueComponent === 0 ? 'text-[#00665e]' : 'text-gray-500'}`}>Carrinho</Text>
          </TouchableOpacity>

          <TouchableOpacity className={`flex-row items-center gap-2   ${valueComponent === 1 ? 'border-b-2 border-[#00665e]' : ''}`} onPress={() => setValueComponent(1)}>
            <IconVectorComponent icon={{
              value: {
                type: IconType.EntypoIcon,
                name: "message"
              },
              size: 19,
              color: valueComponent === 1 ? '#00665e' : 'gray'
            }} />
            <Text className={` text-md font-semibold my-2 ${valueComponent === 1 ? 'text-[#00665e]' : 'text-gray-500'}`}>Pedido</Text>
          </TouchableOpacity>

          <TouchableOpacity className={`flex-row items-center gap-2   ${valueComponent === 2 ? 'border-b-2 border-[#00665e]' : ''}`} onPress={() => setValueComponent(2)}>
            <IconVectorComponent icon={{
              value: {
                type: IconType.FontAwesome6Icon,
                name: "truck"
              },
              size: 19,
              color: valueComponent === 2 ? '#00665e' : 'gray'
            }} />
            <Text className={` text-md font-semibold my-2 ${valueComponent === 2 ? 'text-[#00665e]' : 'text-gray-500'}`}>Encomenda</Text>
          </TouchableOpacity>

        </View>

        <View>
          {/* <Text>Components</Text> */}
          {components[valueComponent]}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}