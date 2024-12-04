import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { truncateText } from '@/utils/TruncateText'
import { formatDate1 } from '@/utils/FormatDate'

interface PostCardProps {
    title: string,
    description: string,
    datePub: Date,
    urlImg: ImageSourcePropType | undefined
    bottonName: string
}

export default function PostCard(props: PostCardProps) {
    return (
        <View className='bg-gray-50 shadow-sm rounded-lg mr-5 overflow-hidden'>
            {/* Imagem no topo */}
            <View style={{ width: '100%', height: 200 }}>
                <Image
                    source={props.urlImg}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                />
            </View>

            {/* Conteúdo abaixo da imagem */}
            <View className='p-5'>
                <Text className='font-bold text-md'>{props.title}</Text>
                <Text className='text-gray-500 text-sm mt-2'>{truncateText(props.description)}</Text>

                <View className='flex-row justify-between items-center mt-4'>
                    <Text>{formatDate1(props.datePub)}</Text>
                    <TouchableOpacity className='bg-gray-100 w-28 rounded-lg  mr-2'>
                        <Text className='text-center text-[#00665e] p-2 text-sm font-bold'>{props.bottonName}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
