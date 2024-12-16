import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import SubmitRecipeItem from '@/components/submitRecipes/SubmitRecipeItem'
import TitleCategories from '@/components/card/TitleCategories'


export default function SendRecipeScreen() {
  const navigation = useNavigation()
  return (
    <SafeAreaView>

      <View className='bg-[#00665e] p-5 '>
        <View className='flex-row mt-10 '>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className='bg-yellow-400 p-2 -mt-2 rounded-bl-2xl  items-start'
          >
            <ArrowLeftIcon size={20} color={"black"} />
          </TouchableOpacity>
          <Text className='text-center  text-white text-lg flex-1'>Enviar Receita Medica</Text>
        </View>
      </View>

      <ScrollView className=''>

        <View className='flex-col gap-3 m-4'>
          <SubmitRecipeItem
            title='Submeter Receita Médica'
            description='Envie a Sua Receita Médica'
            stateNumber={1}
            state
          />

          <SubmitRecipeItem
            title='Submeter Receita Médica'
            description='Envie a Sua Receita Médica'
            stateNumber={1}
          />

          <SubmitRecipeItem
            title='Submeter Receita Médica'
            description='Envie a Sua Receita Médica'
            stateNumber={1}
          />
        </View>

        <View className='bg-white h-screen'>
          {/* content */}
          <View className='m-5'>

            <View className='flex-col items-center  mb-5'>
              <Text className='text-lg font-medium'>Realizar pré-encomenda de receita médica</Text>
              <Text className='text-sm  text-gray-500'>Selecione como pretende submeter a sua receita</Text>
            </View>

            <View className='bg-gray-100 p-2 rounded-lg'>
              {/* Buttons */}
              <View className='flex-row justify-around gap-2 items-center'>
                <TouchableOpacity className=' '>
                  <Text className='font-bold uppercase'>SMS</Text>
                </TouchableOpacity>

                <TouchableOpacity className=''>
                  <Text>FOTOGRAFIA</Text>
                </TouchableOpacity>

                <TouchableOpacity className='bg-white shadow rounded-lg px-12 py-2'>
                  <Text>CÓDIGO</Text>
                </TouchableOpacity>
              </View>

             


            </View>

             {/* Content first - COnteudo principal */}

             <View>
                {/* input with label input com label  */}
                <View>
                  <Text className='my-4 '>Texto</Text>
                  <TextInput placeholder='Colar SMS da receita Médica aqui' className='border rounded-md outline-none border-gray-300 placeholder:text-gray-400 p-3' />
                </View>

              </View>

          </View>


        </View>


      </ScrollView>
    </SafeAreaView>
  )
}