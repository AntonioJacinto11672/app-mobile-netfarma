import { View, Text } from 'react-native'
import React from 'react'

interface MainForButtonComponentProps {
    children: React.ReactNode,
    
}

const MainForButtonComponent: React.FC<MainForButtonComponentProps> = ({
    children
}) => {
    return (
        <View className='bg-gray-100 p-2 rounded-lg'>
            {/* Buttons */}
            <View className='flex-row justify-around gap-2 items-center'>

              {children}
            </View>




        </View>
    )
}

export default MainForButtonComponent