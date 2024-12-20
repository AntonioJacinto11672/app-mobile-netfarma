import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { decremented, incremented } from '@/features/CounterSlice';
import { setcomponentMainValue } from '@/features/SendRecipeSlice';

export default function RequestScreen() {


  // The `state` arg is correctly typed as `RootState` already
  //const count = useAppSelector(selectCount);
  /* const status = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch(); */



  const value = useAppSelector((state) => state.componentMain.value)
  const dispatch = useAppDispatch()
  
  console.log("Value", value)

  return (
    <View className='mx-auto flex-row gap-3 my-auto items-center'>
      <TouchableOpacity className='bg-blue-800 p-3 rounded-lg font-medium hover:bg-blue-900' onPress={() => dispatch(setcomponentMainValue(1))}>
        <Text className='text-white'>Mais</Text>
      </TouchableOpacity>
      <Text> {value}  </Text>
      <TouchableOpacity className='bg-blue-800 p-3 rounded-lg font-medium hover:bg-blue-900' onPress={() => dispatch(setcomponentMainValue(2))}>
        <Text className='text-white'>Menos</Text>
      </TouchableOpacity>
    </View>
  )
}