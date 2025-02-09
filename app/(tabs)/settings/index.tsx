import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { ChevronDownIcon, UserIcon } from 'react-native-heroicons/solid'
import IconVectorComponent, { IconType } from '@/components/IconVectorComponent'
import ListItemsSettings from '@/components/ListItemsSettings'
import TitleCategories from '@/components/card/TitleCategories'
import { useRouter } from 'expo-router'


export default function SettingsScreen() {
    const router = useRouter()
    const logout = () => {

    }
    return (
        <SafeAreaView className='bg-white '>
            <ScrollView className='flex flex-col '>
                <View>

                    <View className='items-center border-b border-b-gray-200'>
                        <TouchableOpacity className='mt-5 mb-2'>
                            <Text className='bg-gray-300 text-white text-3xl p-5 rounded-full text-center'>AJ</Text>
                        </TouchableOpacity>
                        <Text className='text-lg font-extrabold'>António Jacinto</Text>
                        <TouchableOpacity className='flex-row gap-2 items-center mb-10'>
                            <Text className='italic underline'>Editar perfil</Text>
                            <IconVectorComponent
                                icon={{
                                    value: {
                                        type: IconType.FontAwesome6Icon,
                                        name: "edit"
                                    },
                                    size: 16,
                                    color: "gray"
                                }}

                            />
                        </TouchableOpacity>
                    </View>



                    <ListItemsSettings title='Definições' icon={{
                        value: {
                            type: IconType.Ionicons,
                            name: "settings-sharp"
                        },
                        size: 22,
                        color: "#00665e"

                    }} />



                    <Text className='px-5 mt-10 mb-5 text-xl'>Netfarma - saúde em um click</Text>

                    <ListItemsSettings title='Informações do Netfarma' icon={{
                        value: {
                            type: IconType.EntypoIcon,
                            name: "info-with-circle"
                        },
                        size: 22,
                        color: "#00665e"

                    }} />

                    <ListItemsSettings title='Obter direção' icon={{
                        value: {
                            type: IconType.EntypoIcon,
                            name: "location-pin"
                        },
                        size: 22,
                        color: "#00665e"

                    }} />

                    <Text className='px-5 mt-10 mb-5 text-xl'>Loja on-line</Text>

                    <ListItemsSettings title='Encomenda Realizada' icon={{
                        value: {
                            type: IconType.FontAwesome5Icon,
                            name: "truck"
                        },
                        size: 22,
                        color: "#00665e"
                    }} />

                    <ListItemsSettings title='Receitas Medicas' icon={{
                        value: {
                            type: IconType.AntDesignIcon,
                            name: "filetext1"
                        },
                        size: 22,
                        color: "#00665e"
                    }} />


                    <ListItemsSettings title='Requisições de produto' icon={{
                        value: {
                            type: IconType.FontAwesome5Icon,
                            name: "laptop-medical"
                        },
                        size: 22,
                        color: "#00665e"
                    }} />

                    <ListItemsSettings title='Coleção de Produtoa' icon={{
                        value: {
                            type: IconType.FontAwesome5Icon,
                            name: "pump-medical"
                        },
                        size: 22,
                        color: "#00665e"
                    }} />


                    <Text className='px-5 mt-10 mb-5 text-xl'>Comunicações</Text>
                    <ListItemsSettings title='Pulicações recentes' icon={{
                        value: {
                            type: IconType.MaterialIcon,
                            name: "volume-mute"
                        },
                        size: 22,
                        color: "#00665e"
                    }} />

                    <ListItemsSettings title='Proxímos eventos' icon={{
                        value: {
                            type: IconType.FontAwesome5Icon,
                            name: "calendar-week"
                        },
                        size: 22,
                        color: "#00665e"
                    }} />


                    <Text className='px-5 mt-10 mb-5 text-xl'>Assuntos legais</Text>
                    <ListItemsSettings title='Perguntas frequentes' icon={{
                        value: {
                            type: IconType.AntDesignIcon,
                            name: "questioncircle"
                        },
                        size: 22,
                        color: "#00665e"
                    }} />

                    <ListItemsSettings title='Política de compra' icon={{
                        value: {
                            type: IconType.MaterialCommunityIcon,
                            name: "shopping"
                        },
                        size: 22,
                        color: "#00665e"
                    }} />


                    <ListItemsSettings title='Poíica de privacidade' icon={{
                        value: {
                            type: IconType.FontAwesome5Icon,
                            name: "unlock"
                        },
                        size: 22,
                        color: "#00665e"
                    }} />

                    <View>
                        <TouchableOpacity className='bg-[#00665e] m-5 p-5 rounded-lg' onPress={() => {}}>
                            <Text className='font-extrabold text-center text-white text-md'>Terminar sessão</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}