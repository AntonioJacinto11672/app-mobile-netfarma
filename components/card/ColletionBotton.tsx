import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface ColletionBottonProps {
    title: string
}
export default function ColletionBotton({ title }: ColletionBottonProps) {
    return (
        <TouchableOpacity className='bg-gray-100 p-3 w-28 rounded-full mr-2'>
            <Text className='text-center'> {title} </Text>
        </TouchableOpacity>
    )
}