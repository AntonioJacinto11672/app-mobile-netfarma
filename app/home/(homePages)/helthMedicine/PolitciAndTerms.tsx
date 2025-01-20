import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from 'expo-router'

export default function PolitciAndTerms() {
    const navigation = useNavigation()

    return (
        <View>
            <SafeAreaView className='h-full'>
                <View className='bg-[#00665e] p-5 '>
                    <View className='flex-row mt-2 '>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            className='bg-yellow-400 p-2 -mt-2 rounded-bl-2xl  items-start'
                        >
                            <ArrowLeftIcon size={20} color={"black"} />
                        </TouchableOpacity>
                        <Text className='text-center  text-white text-lg flex-1'>Enviar Receita Medica 2</Text>
                    </View>
                </View>
                <ScrollView className='bg-white' showsVerticalScrollIndicator={false}>
                    <View className=' m-5'>
                        <View><Text className='font-semibold text-xl mb-2'> What is Lorem Ipsum?</Text></View>
                        <View><Text className='text-justify text-md mb-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text></View>

                        <View><Text className='font-semibold text-xl mb-2'> What is Lorem Ipsum?</Text></View>
                        <View><Text className='text-justify text-md mb-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text></View>

                        <View><Text className='font-semibold text-xl mb-2'> What is Lorem Ipsum?</Text></View>
                        <View><Text className='text-justify text-md mb-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text></View>
                        
                        <View><Text className='font-semibold text-xl mb-2'> What is Lorem Ipsum?</Text></View>
                        <View><Text className='text-justify text-md mb-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text></View>

                    </View>

                </ScrollView>
                <View className='sticky  bottom-0'>
                    <TouchableOpacity className='bg-[#00665e] m-5 p-5 rounded-lg' onPress={() => { }}>
                        <Text className='font-extrabold text-center text-white text-md'>Aceitar termos e condições</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}