import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { decremented, incremented } from '@/features/CounterSlice';
import { setcomponentMainValue } from '@/features/SendRecipeSlice';
import { useNavigation } from 'expo-router';
import SmsContentComponent from '@/components/submitRecipes/content/SmsContentComponent';
import FotografiaComponent from '@/components/submitRecipes/content/FotografiaComponent';
import CodigoContentComponent from '@/components/submitRecipes/content/CodigoContentComponent';
import CompartipactionSystemFalse from '@/components/submitRecipes/CompartipactionSystemFalse';
import CompartipactionSystemTrue from '@/components/submitRecipes/CompartipactionSystemTrue';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import SubmitRecipeItem from '@/components/submitRecipes/SubmitRecipeItem';
import TitleAndDecriptionSubmit from '@/components/submitRecipes/TitleAndDecriptionSubmit';
import MainForButtonComponent from '@/components/submitRecipes/MainForButtonComponent';
import MainButtonItem from '@/components/submitRecipes/MainButtonItem';
import InputWhithLabel from '@/components/_forms/InputWhithLabel';
import MenuUploadFile from '@/components/ui/MenuUploadFile';
import IconVectorComponent, { IconType } from '@/components/IconVectorComponent';
import BoxText from '@/components/ui/BoxText';
import ButtonLargeOpacity from '@/components/ui/ButtonLargeOpacity';

export default function RequestScreen() {
  const [testState, setTestState] = useState(0)
  const navigation = useNavigation()

  const componentMain: any[] = [
    <SmsContentComponent />,
    <FotografiaComponent />,
    <CodigoContentComponent />
  ]

  const componetComparticipation: any[] = [
    <CompartipactionSystemFalse />,
    <View>
      <CompartipactionSystemTrue />
      <CompartipactionSystemFalse />
    </View>,

  ]

  /* Valores dos componentes */
  const [componentMainValue, setComponentMainValue] = useState<number>(0)
  const [compartipactionSystemValue, setCompartipactionSystemValue] = useState<number>(0)


  let [stateValue, setStateValue] = useState<number>()
  useEffect(() => {
    setStateValue(componentMainValue)
  }, [componentMainValue])


  const [hiddenMenu, setHiddenMenu] = React.useState(false)

  const toggleMenu = () => {
    setHiddenMenu(!hiddenMenu)
  }



  return (
    <SafeAreaView className='h-full'>
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
            title='Submeter Pedido'
            description='Requisite o(s) produtos que pretende'
            stateNumber={1}
            active={true}
          />

          <SubmitRecipeItem
            title='Aguardar valor'
            description='Aguardar um preço para esse Valor'
            stateNumber={2}
          />

          <SubmitRecipeItem
            title='Adicionar ao carrinho'
            description='Adicionar ao carrinho e clonclua a encomedna'
            stateNumber={3}
          />
        </View>

        <View className='bg-white'>
          {/* content */}
          <View className='m-5 '>
            <TitleAndDecriptionSubmit
              title='Realizar pré-encomenda de Produtos'
              description='Requisite o(s) produto(s) que não consegiu encontrar na lista de produtos. Indique o que pretende com a maioria dos detalhes possível.'
            />
            <View className='my-5'>
              {/* <Text className='my-4 '>Insa O texto </Text> */}
              <TextInput placeholder='' className='border rounded-md outline-none border-gray-300 placeholder:text-gray-400 p-4' />
            </View>

            <View>
              <Text className='my-4 '>Fotografia do produto:  </Text>
              <View className='flex-row items-center'>

                <TextInput readOnly keyboardType='url' placeholder='procurar...' className='w-full border rounded-md outline-none border-gray-300 placeholder:text-gray-400 p-3' onPress={toggleMenu} />

                <View className='-left-10'>
                  <IconVectorComponent icon={{
                    value: {
                      type: IconType.FeatherIcon,
                      name: "folder-plus"
                    },
                    color: "gray",
                    size: 22

                  }} />


                </View>
              </View>
              {/* Menu quando clicarem no input */}
              {hiddenMenu && <MenuUploadFile />}
              {/* Other input */}


            </View>
          </View>


          <BoxText text='Pode consultar o estado da sua pré-encomneda e adicioná-las ao carrinho em: Menu - Requisições de produtos' />

          <ButtonLargeOpacity text='Submeter pré-encomenda' />
        </View>


      </ScrollView>

    </SafeAreaView>
  )
}