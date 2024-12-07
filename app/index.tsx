import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Redirect } from 'expo-router'

const HomeScreen = () => {
    const [login, setLogin] = useState<Boolean>(false)

    if (login) {
        return <Redirect href={"/home"} />
    }
    return (
        <>
           <Redirect href={"/home/CartScreen"} />
        </>
    )
}

export default HomeScreen