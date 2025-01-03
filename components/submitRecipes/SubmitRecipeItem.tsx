import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface SubmitRecipeItemProps {
    title: string,
    description: string,
    stateNumber: number,
    active?: boolean
}
export default function SubmitRecipeItem(props: SubmitRecipeItemProps) {
    return (
        <View className='flex-row  items-center gap-3 '>

            <View className=''>
                <TouchableOpacity className={`p-2 border-2   rounded-full w-12  ${props.active ? 'border-[#00665e]' : 'border-gray-500'}`}>
                    <Text className= {`-ml-2 text-center text-lg font-bold items-center  ${props.active ? 'text-[#00665e]' : 'text-gray-500'}`} > 0{props.stateNumber} </Text>
                </TouchableOpacity>
            </View>

            <View className=''>
                <Text className={`text-lg font-semibold uppercase ${props.active ? 'text-[#00665e]' : 'text-gray-500'}`} > {props.title} </Text>
                <Text className='text-sm text-gray-500 '> {props.description} </Text>
            </View>

        </View>
    )
}