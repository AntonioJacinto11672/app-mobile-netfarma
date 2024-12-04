import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { MagnifyingGlassIcon } from 'react-native-heroicons/solid'

export default function SearchComponent() {
  return (
    <View className="flex-row items-center space-x-2 pb-2 mx-4 ">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color={"gray"} size={20} />
          <TextInput placeholder="Restaurant and cuisiness" keyboardType="default" className="placeholder:text-gray-400" />
        </View>
      </View>
  )
}