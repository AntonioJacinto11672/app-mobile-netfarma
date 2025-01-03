import { View, Text, TextInput } from 'react-native'
import React from 'react'

interface InputWhithLabelProps {
    label: string,
    placeholder?: string
    value?: string
    onChangeText?: (value: string) => void
}

export default function InputWhithLabel(
    { label, placeholder, value, onChangeText }: InputWhithLabelProps
) {
    return (
        <View>
            <Text className='my-4 '> {label}  </Text>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                className='border rounded-md outline-none border-gray-300 placeholder:text-gray-400 p-3' />
        </View>
    )
}