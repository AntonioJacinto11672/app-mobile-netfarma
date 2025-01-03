import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import SmsContentComponent from '@/components/submitRecipes/content/SmsContentComponent'
import FotografiaComponent from '@/components/submitRecipes/content/FotografiaComponent'
import CodigoContentComponent from '@/components/submitRecipes/content/CodigoContentComponent'
import CompartipactionSystemFalse from '@/components/submitRecipes/CompartipactionSystemFalse'
import CompartipactionSystemTrue from '@/components/submitRecipes/CompartipactionSystemTrue'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import SubmitRecipeItem from '@/components/submitRecipes/SubmitRecipeItem'
import MainForButtonComponent from '@/components/submitRecipes/MainForButtonComponent'
import MainButtonItem from '@/components/submitRecipes/MainButtonItem'
import TitleAndDecriptionSubmit from '@/components/submitRecipes/TitleAndDecriptionSubmit'
import { setcomponentMainValue } from '@/features/SendRecipeSlice'

const SendRecipeScreen = () => {
  const [testState, setTestState] = useState(0)
  const navigation = useNavigation()

  const componentMain: any[] = [
    <SmsContentComponent />,
    <FotografiaComponent />,
    <CodigoContentComponent />
  ]

  const componetComparticipation: any[] = [
    <CompartipactionSystemFalse />,
    <CompartipactionSystemTrue />,

  ]

  /* Valores dos componentes */
  const [componentMainValue, setComponentMainValue] = useState<number>(0)
  const [compartipactionSystemValue, setCompartipactionSystemValue] = useState<number>(0)


  let [stateValue, setStateValue] = useState<number>()
  useEffect(() => {
    setStateValue(componentMainValue)
  }, [componentMainValue])




  const value = useAppSelector((state) => state.componentMain.value)
  const dispatch = useAppDispatch()


  return (
    <SafeAreaView className=' h-full'>
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

      <ScrollView>
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

            <TitleAndDecriptionSubmit
              title='Realizar pré-encomenda de receita médica'
              description='Selecione como pretende submeter a sua receita'
            />

            <MainForButtonComponent>
              <MainButtonItem title='SMS' componentMainState={componentMainValue === 0 ? true : false} onPress={() => { setComponentMainValue(0) }} />
              <MainButtonItem title='Fotografia' componentMainState={componentMainValue === 1 ? true : false} onPress={() => { setComponentMainValue(1) }} />
              <MainButtonItem title='Código' componentMainState={componentMainValue == 2 ? true : false} onPress={() => { setComponentMainValue(2) }} />
            </MainForButtonComponent>

            {/* Content first - COnteudo principal */}


            <View className='mb-5'>
              {/* input with label input com label  */}

              {componentMain[componentMainValue]}
            </View>



            <View>
              <Text className='text-lg mb-5'>Tem um sistema de comparticipação adicional ao SNS que deseja a dicionar?</Text>
            </View>


            {/*  <View className='bg-gray-100 p-2 rounded-lg'>
              
              <View className='flex-row justify-around gap-2 items-center'>
                <TouchableOpacity className=' '>
                  <Text className='upercase'>Não</Text>
                </TouchableOpacity>



                <TouchableOpacity className='bg-white shadow rounded-lg px-12 py-2'>
                  <Text className='font-bold uppercase'>Sim</Text>
                </TouchableOpacity>
              </View>

            </View> */}

            <MainForButtonComponent>
              <MainButtonItem title='Não' componentMainState={compartipactionSystemValue === 0 ? true : false} onPress={() => setCompartipactionSystemValue(0)} />
              <MainButtonItem title='Sim' componentMainState={compartipactionSystemValue === 1 ? true : false} onPress={() => setCompartipactionSystemValue(1)} />
            </MainForButtonComponent>


            <View className='my-5'>

              {componetComparticipation[compartipactionSystemValue]}

              <View>
                <View className='mb-10'>
                  <TouchableOpacity className='bg-[#00665e] m-5 p-5 rounded-lg disabled:text-gray-200' onPress={() => { }}>
                    <Text className='font-extrabold text-center text-white text-md'>Submeter pré-encomenda</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

          </View>




        </View>


      </ScrollView>

    </SafeAreaView>
  )
}

export default SendRecipeScreen