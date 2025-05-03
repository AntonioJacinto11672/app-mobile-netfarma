import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowLeftCircleIcon, XCircleIcon } from 'react-native-heroicons/solid'
import { useRouter } from 'expo-router'
interface HomeHeaderProps {
    // props
    title: string,
    onPress?: () => void,
    stateButton?: boolean,
    atateGoBack?: boolean
    

}
export default function HomeHeader({ title, onPress, stateButton, atateGoBack }: HomeHeaderProps) {
    const router = useRouter()
    const handleGoBack = () => {
        console.log("Back", router.canGoBack())
        
        if (router.canGoBack()) {
            router.back()
        }
    }
    return (
        <View className={`p-5 border-b border-[#00CCBB] bg-white shadow-xs  ${atateGoBack && stateButton ? "flex-row items-center  justify-between" : ""}`}>
            {atateGoBack && <TouchableOpacity onPress={() => {handleGoBack()}  } className={`rounded-full bg-gray-100 ${atateGoBack && !stateButton ? "absolute" : ""}`}>
                <ArrowLeftCircleIcon color={"#00CCBB"} height={50} width={50} />
            </TouchableOpacity>}

            <View className='mb-3'>
                <Text className='text-lg font-bold text-center '>{title} </Text>
            </View>

            {stateButton && <TouchableOpacity onPress={onPress} className={`rounded-full bg-gray-100 ${!atateGoBack ? "absolute top-3 right-5" : ""}`}>
                <XCircleIcon color={"#00CCBB"} height={50} width={50} />
            </TouchableOpacity>}
        </View>
    )
}