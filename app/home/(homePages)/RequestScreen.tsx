import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { decremented, incremented } from '@/features/CounterSlice';

export default function RequestScreen() {
  const [incrementAmount, setIncrementAmount] = useState('2');

  // The `state` arg is correctly typed as `RootState` already
  //const count = useAppSelector(selectCount);
  /* const status = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch(); */



  const value = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  
  console.log("Value", value)

  return (
    <View className='mx-auto flex-row gap-3 my-auto items-center'>
      <TouchableOpacity className='bg-blue-800 p-3 rounded-lg font-medium hover:bg-blue-900' onPress={() => dispatch(incremented())}>
        <Text className='text-white'>Mais</Text>
      </TouchableOpacity>
      <Text> {value}  </Text>
      <TouchableOpacity className='bg-blue-800 p-3 rounded-lg font-medium hover:bg-blue-900' onPress={() => dispatch(decremented())}>
        <Text className='text-white'>Menos</Text>
      </TouchableOpacity>
    </View>
  )
}