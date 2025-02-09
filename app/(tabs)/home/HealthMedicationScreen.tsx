import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { Link, useNavigation } from 'expo-router'

const HealthMedicationScreen = () => {
  const navigation = useNavigation()
  return (
    <>
      <SafeAreaView className='h-full'>
        <View className='bg-[#00665e] p-5 '>
          <View className='flex-row mt-10 '>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className='bg-yellow-400 p-2 -mt-2 rounded-bl-2xl  items-start'
            >
              <ArrowLeftIcon size={20} color={"black"} />
            </TouchableOpacity>
            <Text className='text-center  text-white text-lg flex-1'>Enviar Receita Medica 2</Text>
          </View>
        </View>
        <ScrollView className='m-5'>
          <View className='my-2'>
            <Text className='text-[25px] text-center font-bold'> As Suas medições de saúde</Text>
            <Text className='text-lg  mt-3 text-justify'>Matenha um registo das suas medições de saúde w acompanha a evolução dos valores</Text>
          </View>

          <View className='  bg-gray-200 my-5   p-3 text-lg  rounded-lg'>
            <Text className='text-lg'> Leia os termos e condições e aceita se deseja que a fármacia consiga Adicionar e gerir estas informações, <Link href={'/home/helthMedicine/PolitciAndTerms'} className='underline'>clicando aqui.</Link>   </Text>
          </View>
        </ScrollView>



      </SafeAreaView>
    </>
  )
}

export default HealthMedicationScreen