import { View, Text } from 'react-native'
import React from 'react'
    interface BoxTextProps {
        text: string
    }

export default function BoxText({ text }: BoxTextProps) {
    return (
        <View className='  bg-gray-100 my-5 mx-5  p-2  rounded-lg'>
            <Text className='text-lg'> {text}   </Text>
        </View>
    )
}