import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function SmsContentComponent() {
    return (
        <View>
            <View className='my-5'>
                {/* <Text className='my-4 '>Insa O texto </Text> */}
                <TextInput placeholder='Colar SMS da receita Médica aqui' className='border rounded-md outline-none border-gray-300 placeholder:text-gray-400 p-3' />
            </View>

            <View>
                <Text className='my-4 '>Informações adicionais/prefências  </Text>
                <TextInput placeholder='' className='border rounded-md outline-none border-gray-300 placeholder:text-gray-400 p-3' />
            </View>
        </View>
    )
}