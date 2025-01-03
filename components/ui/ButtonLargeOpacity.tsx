import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface ButtonLargeOpacityProps {
    text: string,
    onPress?: () => void,
    anable?: boolean 
}

export default function ButtonLargeOpacity(props: ButtonLargeOpacityProps) {
    return (
        <View>
            <TouchableOpacity className={`m-5 p-5 rounded-lg ${props.anable ? 'bg-[#00665e]  disabled:text-gray-200' : 'bg-gray-100'}`} disabled={props.anable} onPress={props.onPress}>
                <Text className={`font-extrabold text-center text-md ${props.anable ? ' text-white ' : 'text-gray-400'}`}> {props.text} </Text>
            </TouchableOpacity>
        </View>
    )
}