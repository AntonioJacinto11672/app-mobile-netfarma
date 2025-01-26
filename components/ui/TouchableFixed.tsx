import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FormatPrice } from '@/utils/FormPrice'

interface TouchableFixedProps {
    // props
    subtotal?: number,
    delivery?: number,
    total?: number,
    title: string,
    onPress: () => void
}
export default function TouchableFixed({ subtotal, delivery, total,title, onPress }: TouchableFixedProps) {
    return (
        <View className='sticky  bottom-0 bg-gray-100'>
            <View className='mx-5 mt-5'>
                <View className='flex-row justify-between items-center'>
                    <Text className='text-lg text-gray-500'>Subtotal </Text>
                    <Text className='text-lg text-gray-500'> {FormatPrice(subtotal ? subtotal : 0)} </Text>
                </View>
                <View className='flex-row justify-between items-center'>
                    <Text className='text-lg text-gray-500'>Entrega</Text>
                    <Text className='text-lg text-gray-500'> {FormatPrice(delivery ? delivery : 0 )} </Text>
                </View>
                <View className='flex-row justify-between items-center'>
                    <Text className='text-lg font-bold'>Total (IVA inc.)</Text>
                    <Text className='text-lg'> {FormatPrice(total ? total : 0)} </Text>
                </View>
            </View>
            <TouchableOpacity className='bg-[#00665e] m-5 p-5 rounded-lg' onPress={onPress}>
                <Text className='font-extrabold text-center text-white text-md'> {title} </Text>
            </TouchableOpacity>
        </View>
    )
}