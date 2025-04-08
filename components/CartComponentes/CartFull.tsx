import { View, Text, ScrollView, Image, Touchable } from 'react-native'
import React from 'react'
import IconVectorComponent, { IconType } from '../IconVectorComponent'
import { FormatPrice } from '@/utils/FormPrice'
import { TouchableOpacity } from 'react-native'
import TouchableFixed from '../ui/TouchableFixed'
import { CartProductType } from '@/utils/cartType'
import { truncateText } from '@/utils/TruncateText'
import { useCart } from '@/contexts/CartContext'

interface CartFullProps {
    item: CartProductType
}
export default function CartFull({ item }: CartFullProps) {
    const { handleRemoveProductFromCart, handleCartQtyIncrease, handleCartQtyDecrease } = useCart()
    return (
        <View className='flex-row justify-between mx-5 text-xs gap-4 pb-2  mt-8 font-semibold border-b  border-b-gray-200'>

            {/* Imagem */}
            <View className=' flex-row gap-4'>
                <View className='w-[100px] h-[100px]'>
                    <Image
                        source={require("../../assets/images/medicine/4.jpg")}
                        className=' p-3  opacity-1 rounded-xl mb-4 object-cover '
                        resizeMode='cover'
                        style={{ width: '100%', height: '100%' }}
                    />
                </View>
                {/* informação */}
                <View className='flex-row justify-between  w-full'>
                    <View className='flex-1 gap-2'>
                        <Text className='flex-1 font-semibold text-lg'> {item.name} </Text>
                        <Text className='flex-1 text-gray-500 text-base'> {truncateText(item.description)} </Text>
                        <Text className='flex-1 text-gray-400 text-base'>7361543</Text>
                    </View>

                </View>

            </View>

            <View>
                <Text className='justify-start mx-auto'> {FormatPrice(item.price)} </Text>
            </View>

            <View className='flex-row items-center justify-center gap-2'>
                <TouchableOpacity className='bg-gray-200 rounded-full p-2' onPress={() => handleCartQtyDecrease(item)}>
                    <IconVectorComponent icon={{
                        value: {
                            type: IconType.AntDesignIcon,
                            name: "minus"
                        },
                        size: 20,
                        color: "#00665e"
                    }} />
                </TouchableOpacity>
                <Text className='font-bold text-lg'> {item.quantity} </Text>
                <TouchableOpacity className='bg-gray-200 rounded-full p-2' onPress={() => handleCartQtyIncrease(item)}>
                    <IconVectorComponent icon={{
                        value: {
                            type: IconType.AntDesignIcon,
                            name: "plus"
                        },
                        size: 20,
                        color: "#00665e"
                    }} />
                </TouchableOpacity>

            </View>

            {/* Fechar e preço */}

            <View className=' justify-between items-end'>
                <TouchableOpacity className='' onPress={() => handleRemoveProductFromCart(item)}>
                    <Text className='text-red-600 font-bold text-lg hover:text-red-800'>
                        <IconVectorComponent icon={{
                            value: {
                                type: IconType.AntDesignIcon,
                                name: "close"
                            },
                            size: 20,
                            color: ""
                        }} />
                    </Text>
                </TouchableOpacity>
                <Text className=''> {FormatPrice(item.price * item.quantity)} </Text>
            </View>
        </View>


    )
}