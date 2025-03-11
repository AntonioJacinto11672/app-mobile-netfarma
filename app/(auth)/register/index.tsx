import { View, Text, TouchableOpacity, Image, Touchable, TextInput } from 'react-native'
import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { useNavigationBuilder } from '@react-navigation/native'
import { useNavigation, useRouter } from 'expo-router'
import { useForm, Controller } from "react-hook-form"
import UserService from '@/api/services/user.service'

const userService = new UserService();
const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      phoneNumber: "",
    },
  })

  const navigation = useNavigation()
  const router = useRouter()


  const handleAddUser = async (data: any) => {
    try {
      const response = await userService.singUp(data.email, data.password, data.phoneNumber)
      console.log(response)
      console.log(response.data)

      const res = response as any
      console.log(res)

      if (res.id) {
        console.log("token", res.id)
        router.replace("/(auth)/login")
      }

      if (res.description) {
        alert(res.message)
      }

    }
    catch (error) {
      console.log("Error: ", error)
    }
  }
  return (
    <View className='flex-1 bg-white' style={{ backgroundColor: "#00665e" }}>
      <SafeAreaView className='flex'>
        <View className='flex-row justify-start'>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className='bg-yellow-400 p-2 rounded-bl-2xl ml-4'
          >
            <ArrowLeftIcon size={20} color={"black"} />
          </TouchableOpacity>
        </View>

        <View className='flex-row justify-center'>
          <Image
            source={require("@/assets/images/logo/NEtFarma1.png")}

            style={{ height: 111, width: 165 }}
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
          {/* Email Input */}
          <Text className='text-gray-700 ml-4'>Telefone </Text>
          <Controller
            control={control}
            rules={{
              required: "campo obrigatório",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput className={`p-4  bg-gray-100 text-gray-700 rounded-2xl mb-3  ${errors.phoneNumber ? ' text-gray-100 outline outline-red-500' : ''}`}
                placeholder='Enter phone Number'
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="phoneNumber"
          />
          {errors.phoneNumber && <Text className='text-red-500 text-small ml-2'> {errors.phoneNumber.message} </Text>}


          <Text className='text-gray-700 ml-4'>Email Address </Text>
          <Controller
            control={control}
            rules={{
              required: "campo obrigatório",
              pattern: {  // regex
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, // regex  para email
                message: "email inválido"
              },

            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput className={`p-4  bg-gray-100 text-gray-700 rounded-2xl mb-3  ${errors.email ? ' text-gray-100 outline outline-red-500' : ''}`}
                placeholder='Enter email' keyboardType='email-address'
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}                
              />
            )}
            name="email"
          />
          {errors.email && <Text className='text-red-500 text-small ml-2'> {errors.email.message} </Text>}



          <Text className='text-gray-700 ml-4'>Password </Text>
          <Controller
            control={control}
            rules={{
              required: "campo obrigatório",
              minLength: { value: 8, message: "mínimo de 8 caracteres" },
              pattern: {  // regex
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: "A senha deve ter pelo menos 8 caracteres, incluindo pelo menos uma letra e um número"
              }
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput className={`p-4  bg-gray-100 text-gray-700 rounded-2xl mb-3  ${errors.password ? ' text-gray-100 outline outline-red-500' : ''}`}
                placeholder='Enter password'
                secureTextEntry
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="password"
          />
          {errors.password && <Text className='text-red-500 text-small ml-2'> {errors.password.message} </Text>}


          <TouchableOpacity className='py-3 bg-yellow-400 rounded-xl' onPress={handleSubmit(handleAddUser)}>
            <Text className='font-xl font-bold text-center text-gray-700'>Register</Text>
          </TouchableOpacity>
        </View>

        <Text className='text-xl text-gray-700 font-bold text-center py-5'>Or</Text>
        <View className='flex-row justify-center space-x-12'>
          {/* Social Mídeia */}
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
          <Text className='text-gray-500 font-semibold'>Alread  have acount?</Text>
          <TouchableOpacity className='' onPress={() => { }}>
            <Text className='font-semibold text-yellow-400'>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Register