import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import IconVectorComponent, { IconType } from '../IconVectorComponent'

export default function EncomendaEmpty() {
    return (
        <ScrollView className=''>
            <View className='flex-col items-center px-5'>
                <TouchableOpacity className=' border-2 rounded-full p-6 border-[#00665e] my-4'>
                    <IconVectorComponent icon={{
                        value: {
                            type: IconType.FontAwesome6Icon,
                            name: "truck"
                        },
                        size: 40,
                        color: '#00665e'
                    }} />
                </TouchableOpacity>
                <Text className='text-center font-extrabold text-xl mb-5'>Sem encomendas realzadas</Text>
                <View>
                    <Text className='text-center text-lg mb-5'>Quanda concluir encomendas, poderá visualizar o estado em que se encontram e o seu histórico de compras </Text>
                </View>
                {/* <TouchableOpacity className='p-3.5  border w-full bg-[#00665e] border-[#00665e] rounded-lg'>
                    <Text className='text-center text-white text-md font-semibold'>Pesquisar produtos</Text>
                </TouchableOpacity> */}
            </View>
        </ScrollView>
    )
}