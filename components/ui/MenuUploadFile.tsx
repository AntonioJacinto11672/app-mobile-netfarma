import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import IconVectorComponent, { IconType } from '../IconVectorComponent'

export default function MenuUploadFile() {
    return (
        <View className='relative '>
            <View className='rounded-xl absolute w-8/12 ' style={styles.dropDown}>
                <TouchableOpacity className='flex-row items-center border-b border-b-gray-200 p-2'>

                    <Text className='flex-1 text-lg'> Photo Libary </Text>
                    <IconVectorComponent
                        icon={{
                            value: {
                                type: IconType.Ionicons,
                                name: "images-outline"
                            },
                            color: "black",
                            size: 22
                        }}
                    />

                </TouchableOpacity>
                <TouchableOpacity className='flex-row items-center border-b border-b-gray-200 p-2'>

                    <Text className='flex-1 text-lg'> Take a photo </Text>
                    <IconVectorComponent
                        icon={{
                            value: {
                                type: IconType.FeatherIcon,
                                name: "camera"
                            },
                            color: "black",
                            size: 22
                        }}
                    />

                </TouchableOpacity>
                <TouchableOpacity className='flex-row items-center border-b border-b-gray-200 p-2'>

                    <Text className='flex-1 text-lg'> Choose File </Text>
                    <IconVectorComponent
                        icon={{
                            value: {
                                type: IconType.Ionicons,
                                name: "folder-outline"
                            },
                            color: "black",
                            size: 22
                        }}
                    />

                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    dropDown: {
        backgroundColor: "white",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 2,
        zIndex: 1
    }
})