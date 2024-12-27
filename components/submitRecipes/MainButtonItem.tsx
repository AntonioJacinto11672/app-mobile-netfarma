import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

interface MainButtonItemProps {
    title: string,
    componentMainValue?: number,
    onPress: () => void,
    componentMainState?: boolean
}

export default function MainButtonItem(props: MainButtonItemProps) {
    return (
        <TouchableOpacity className={`flex-row items-center gap-2 ${props.componentMainState ? 'bg-white  rounded-lg px-12 py-2' : ''} `} onPress={props.onPress}
            style={props.componentMainState ? styles.button : ''}
        >
            <Text className={` uppercase ${props.componentMainState ? 'font-bold ' : ''} `}> {props.title} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2, // Necessário para sombras no Android
    }
})