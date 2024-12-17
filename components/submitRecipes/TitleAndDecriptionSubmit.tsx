import { View, Text } from 'react-native'
import React from 'react'

interface TitleAndDecriptionSubmitProps {
    title: string,
    description: string
}

export default function TitleAndDecriptionSubmit(props: TitleAndDecriptionSubmitProps) {
    return (
        <View className='flex-col items-center  mb-5'>
            <Text className='text-lg font-medium'> {props.title} </Text>
            <Text className='text-sm  text-gray-500'> {props.description} </Text>
        </View>
    )
}