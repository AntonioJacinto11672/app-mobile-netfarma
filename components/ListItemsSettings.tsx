import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import IconVectorComponent, { CustomProps, IconType } from './IconVectorComponent'

interface ListItemsSettingsProps extends CustomProps {
    title: string,
    description?: string
}
export default function ListItemsSettings(props: ListItemsSettingsProps) {
    return (
        <>
            <TouchableOpacity className='flex-row gap-2 items-center border-b border-b-gray-200 p-5'>
               
                <IconVectorComponent icon={props.icon} />
                <Text className='flex-1 text-lg'> {props.title} </Text>
                <IconVectorComponent
                    icon={{
                        value: {
                            type: IconType.EntypoIcon,
                            name: "chevron-right"
                        },
                        size: 22,
                        color: "#00665e"

                    }}
                />
               
            </TouchableOpacity>
            
          
        </>
    )
}