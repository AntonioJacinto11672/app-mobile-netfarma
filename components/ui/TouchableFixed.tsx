import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface TouchableFixedProps {
    title: string,
    onPress: () => void
}
export default function TouchableFixed({ title, onPress }: TouchableFixedProps) {
    return (
        <View className='sticky  bottom-0 bg-gray-100'>
            <TouchableOpacity className='bg-[#00665e] m-5 p-5 rounded-lg' onPress={onPress}>
                <Text className='font-extrabold text-center text-white text-md'> {title} </Text>
            </TouchableOpacity>
        </View>
    )
}