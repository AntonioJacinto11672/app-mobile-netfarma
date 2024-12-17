import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface MainButtonItemProps {
    title: string,
    componentMainValue?: number,
    onPress: () => void,
    componentMainState?: boolean
}

export default function MainButtonItem(props: MainButtonItemProps) {
    return (
        <TouchableOpacity className={` ${props.componentMainState ? 'bg-white shadow rounded-lg px-12 py-2' : ''} `} onPress={props.onPress}>
            <Text className={` uppercase ${props.componentMainState  ? 'font-bold ' : ''} `}> {props.title} </Text>
        </TouchableOpacity>
    )
}