import { View, Text, ScrollView, Image, Touchable } from 'react-native'
import React from 'react'
import IconVectorComponent, { IconType } from '../IconVectorComponent'
import { FormatPrice } from '@/utils/FormPrice'
import { TouchableOpacity } from 'react-native'
import TouchableFixed from '../ui/TouchableFixed'
import { CartProductType } from '@/utils/cartType'
import { truncateText } from '@/utils/TruncateText'

interface CartFullProps {
    item: CartProductType
}
export default function CartFull({ item }: CartFullProps) {
    return (
        <View className=''>
            <View className=''>
                {/* Conteúdo do produtos */}
                <View className='flex-row justify-between items-center mx-5 py-2 border-b  border-b-gray-200'>
                    {/* Imagem */}
                    <View className='bg-gray-100 items-center mr-5 rounded-lg'>
                        <Image
                            source={require("../../assets/images/medicine/2.png")}
                            className='w-[100px] h-[100px] p-3  opacity-1 rounded-xl mb-4'
                        />
                    </View>
                    {/* informaçõe */}
                    <View className='flex-col justify-between items-start gap-2'>
                        <Text className='flex-1 font-semibold text-md'> {item.name} </Text>
                        <Text className='flex-1 text-gray-500 text-base'> {truncateText(item.description)} </Text>
                        <Text className='flex-1 text-gray-400 text-sm'>7361543</Text>
                        <View className='flex-1 flex-row items-center gap-2 mt-5'>
                            <TouchableOpacity>
                                <IconVectorComponent icon={{
                                    value: {
                                        type: IconType.AntDesignIcon,
                                        name: "minus"
                                    },
                                    size: 20,
                                    color: "#00665e"
                                }} />
                            </TouchableOpacity>
                            <Text className='font-bold text-lg'>1</Text>
                            <IconVectorComponent icon={{
                                value: {
                                    type: IconType.AntDesignIcon,
                                    name: "plus"
                                },
                                size: 20,
                                color: "#00665e"
                            }} />

                        </View>
                    </View>
                    {/* Fechar e preço */}

                    <View className='flex-col items-end '>
                        <View className='flex-1'>
                            <IconVectorComponent icon={{
                                value: {
                                    type: IconType.AntDesignIcon,
                                    name: "close"
                                },
                                size: 20,
                                color: "gray"
                            }} />
                        </View>
                        <View>
                            <Text className='font-bold text-lg'> {FormatPrice(item.price)} </Text>
                        </View>
                    </View>
                </View>


                {/* Valores */}

            </View>

        </View>
    )
}