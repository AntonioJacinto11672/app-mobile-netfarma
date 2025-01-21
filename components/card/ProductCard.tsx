import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import IconVectorComponent, { IconType } from '../IconVectorComponent'
import { truncateText } from '@/utils/TruncateText'
import { FormatPrice } from '@/utils/FormPrice'
import { useNavigation, useRouter } from 'expo-router'

interface ProductCardProps {
    title: string,
    description: string,
    price: number,
    urlImg:  ImageSourcePropType | undefined
}
export default function ProductCard(props: ProductCardProps) {

    const navigation = useNavigation();
    const router = useRouter();

    return (
        <>
            <View className='bg-gray-50  items-center shadow-sm rounded-lg mr-5 '>
               <TouchableOpacity onPress={() => { router.push('/home/(homePages)/product/PoductDetailsScreen') }}>
                 <Image
                    source={props.urlImg}
                    className='w-40 h-40 p-3 bg-gray-100 opacity-1 rounded-lg mb-4'
                />
               </TouchableOpacity>
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