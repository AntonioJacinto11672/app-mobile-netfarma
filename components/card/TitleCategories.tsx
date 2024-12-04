import { View, Text, TouchableOpacity, GestureResponderEvent } from 'react-native'
import React from 'react'

interface TitleCategoriesProps {
    title: string,
    onPress: () => void
}

export default function TitleCategories(props: TitleCategoriesProps) {
    return (
        <View className='flex-row px-5 py-2 items-center space-x-2 '>
            <Text className='flex-1 font-extrabold text-lg dark:text-white'> {props.title} </Text>
            <TouchableOpacity onPress={props.onPress}><Text className='text-[#00665e] text-sm'>Ver todos</Text></TouchableOpacity>
        </View>
    )
}