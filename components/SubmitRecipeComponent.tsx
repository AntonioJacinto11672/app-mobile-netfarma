import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { IconSymbol } from '@/components/ui/IconSymbol';


import { FontAwesome } from '@expo/vector-icons'
import IconVectorComponent, { CustomProps, IconType } from './IconVectorComponent';
const star = "star";

interface Props extends CustomProps {
    text: string,
    onPress?: () => void,
}

const SubmitRecipeComponent = (props: Props) => {
    return (
        <>
            <TouchableOpacity className='content-center  items-center my-2'>
                <View className='bg-gray-200 dark:bg-slate-800 p-4 rounded-full my-2'>
                    {/* <MaterialIcons name={iconName} size={24} color="#00665e" /> */}
                    {/*  <IconVectorComponent icon={{value: {type: IconType.FontAwesomeIcon, name: 'search'}, size: 22, color: "#0022ff"}} /> */}
                    <IconVectorComponent icon={props.icon} />
                </View>
                <Text className='text-center items-center justify-center text-xs text-gray-500 font-medium w-24'> {props.text} </Text>
            </TouchableOpacity>
        </>
    )
}

export default SubmitRecipeComponent