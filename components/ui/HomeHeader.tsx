import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { XCircleIcon } from 'react-native-heroicons/solid'
interface HomeHeaderProps {
    // props
    title: string,
    onPress?: () => void,
    stateButton?: boolean,

}
export default function HomeHeader({ title, onPress, stateButton }: HomeHeaderProps) {
    return (
        <View className='p-5 border-b border-[#00CCBB] bg-white shadow-xs'>
            <View className='mb-3'>
                <Text className='text-lg font-bold text-center'>{title} </Text>
            </View>

            {stateButton && <TouchableOpacity onPress={onPress} className='rounded-full bg-gray-100 absolute top-3 right-5'>
                <XCircleIcon color={"#00CCBB"} height={50} width={50} />
            </TouchableOpacity>}
        </View>
    )
}