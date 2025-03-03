import { View, Text, TouchableOpacity, Image, Touchable, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { useNavigationBuilder } from '@react-navigation/native'
import { useNavigation, useRouter } from 'expo-router'
import { useForm, Controller } from "react-hook-form"


const Login = () => {
  const navigation = useNavigation()
  const router = useRouter()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const onSubmit = (data: any) => console.log(data)



  return (
    <View className='flex-1 bg-white' style={{ backgroundColor: "#00665e" }}>
      <SafeAreaView className='flex'>
        <View className='flex-row justify-start'>
          {/* <TouchableOpacity
            onPress={() => navigation.goBack()}
            className='bg-yellow-400 p-2 rounded-bl-2xl ml-4'
          >
            <ArrowLeftIcon size={20} color={"black"} />
          </TouchableOpacity> */}
        </View>

        <View className='flex-row justify-center'>
          <Image
            source={require("@/assets/images/logo/NEtFarma1.png")}

            style={{ height: 200, width: 200 }}
          />
        </View>
      </SafeAreaView>

      <View className='flex-1 bg-white px-8 pt-8'
        style={{
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50
        }}
      >
        <View className='form space-y-2'>
          <Text className='text-gray-700 ml-4'>Email Address </Text>
          <Controller
            control={control}
            rules={{
              required: "campo obrigatório",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput className={`p-4  bg-gray-100 text-gray-700 rounded-2xl mb-3  ${errors.email ? ' text-gray-100 outline outline-red-500' : ''}`}
                placeholder='Enter email' secureTextEntry
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email"
          />
          {errors.email && <Text> {errors.email.message} </Text>}

          <Text className='text-gray-700 ml-4'>Password </Text>
          <Controller
            control={control}
            rules={{
              required: "campo obrigatório",
              maxLength: { value: 20, message: "máximo de 20 caracteres" },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput className={`p-4  bg-gray-100 text-gray-700 rounded-2xl mb-3  ${errors.password ? ' text-gray-100 outline outline-red-500' : ''}`}
                placeholder='Enter password' secureTextEntry
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="password"
          />
          {errors.password && <Text className='text-red-500 text-small ml-2'> {errors.password.message} </Text>}


          <TouchableOpacity className='flex items-end mb-5 '>
            <Text className='text-gray-700'>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity className='py-3 bg-yellow-400 rounded-xl' onPress={handleSubmit(onSubmit)}>
            <Text className='font-xl font-bold text-center text-gray-700'>Login</Text>
          </TouchableOpacity>


        </View>

        <Text className='text-xl text-gray-700 font-bold text-center py-5'>Or</Text>
        <View className='flex-row justify-center space-x-12'>

          <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
            <Image
              className='w-10 h-10'
            />
          </TouchableOpacity>

          <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
            <Image
              className='w-10 h-10'
            />
          </TouchableOpacity>

          <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
            <Image
              className='w-10 h-10'
            />
          </TouchableOpacity>

          <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
            <Image
              className='w-10 h-10'
            />
          </TouchableOpacity>


        </View>
        <View className='flex-row justify-center mt-7'>
          <Text className='text-gray-500 font-semibold'>Dont't have acount?</Text>
          <TouchableOpacity className='' onPress={() => router.push("/(auth)/register")}  >
            <Text className='font-semibold text-yellow-400'>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Login