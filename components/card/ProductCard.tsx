import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import IconVectorComponent, { IconType } from '../IconVectorComponent'
import { truncateText } from '@/utils/TruncateText'
import { FormatPrice } from '@/utils/FormPrice'

interface ProductCardProps {
    title: string,
    description: string,
    price: number,
    urlImg:  ImageSourcePropType | undefined
}
export default function ProductCard(props: ProductCardProps) {
    return (
        <>
            <View className='bg-gray-50  items-center shadow-sm rounded-lg mr-5 '>
                <Image
                    source={props.urlImg}
                    className='w-40 h-40 p-5 bg-gray-100 opacity-1 rounded-lg mb-4'
                />
                <View className=''>
                    <Text className='font-bold text-md'> {props.title} </Text>
                    <Text className='text-gray-500 text-sm w-28'> {truncateText(props.description)} </Text>
                    <View className='flex-row justify-between my-2 items-center'>
                        <Text> {FormatPrice(props.price)} </Text>
                        <TouchableOpacity>
                            <IconVectorComponent icon={{ value: { type: IconType.FeatherIcon, name: "plus" }, color: "#00665e", size: 24 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}