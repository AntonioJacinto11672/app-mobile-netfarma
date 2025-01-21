import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FormatPrice } from '@/utils/FormPrice'
import IconVectorComponent, { IconType } from '@/components/IconVectorComponent'
import { Link } from 'expo-router'

export default function PoductDetailsScreen() {
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView className=''>
        <View className='bg-gray-100  items-center  mr-5 w-full'>
          <Image
            source={require("../../../../assets/images/medicine/2.png")}
            className='w-450 h-400 p-3  opacity-1 rounded-lg mb-4'
          />
        </View>

        {/* Conteúdo geral  */}
        <View className='m-5'>
          {/* Título */}
          <View className='border-b border-b-gray-200 '>
            <Text className='font-semibold text-2xl'> Paracetamol </Text>
            <Text className='text-gray-500 text-md text-justify my-2'> Paracetamol é um medicamento utilizado para aliviar a dor e a febre. </Text>
            <View className='flex-row justify-between my-2 items-center'>
              <Text className='font-bold text-lg my-2'> {FormatPrice(1000)} </Text>
            </View>
          </View>

          {/* Descrição */}
          <View className='border-b border-b-gray-200'>
            <View className='flex-row  my-2 items-center gap-x-2'>
              <Text className='text-xl'>Descrição do Produto</Text>
              <View>
                <IconVectorComponent icon={{
                  value: {
                    type: IconType.FontistoIcon,
                    name: "arrow-v"
                  },
                  size: 20,
                  color: "#00665e"
                }} />
              </View>

            </View>
            <Text className='text-justify text-lg my-3'>
              O Paracetamol é um medicamento amplamente utilizado para aliviar dores leves a moderadas e reduzir a febre. Ele é eficaz no tratamento de dores de cabeça, dores musculares, artrite, dores nas costas, dores de dente, resfriados e febres.
            </Text>
            <Text className='text-justify text-lg my-3'>
              Este medicamento é conhecido por sua segurança e eficácia quando usado conforme as instruções. O Paracetamol é uma escolha popular para muitas pessoas devido à sua capacidade de proporcionar alívio rápido e duradouro sem causar muitos efeitos colaterais.
            </Text>
            <Text className='text-justify text-lg my-3'>
              É importante seguir a dosagem recomendada para evitar possíveis riscos à saúde. O uso excessivo de Paracetamol pode levar a danos no fígado, por isso é crucial não exceder a dose máxima diária indicada na embalagem ou prescrita pelo seu médico.
            </Text>
            <Text className='text-justify text-lg my-3'>
              Consulte sempre um profissional de saúde antes de iniciar qualquer tratamento com Paracetamol, especialmente se você tiver condições médicas preexistentes ou estiver tomando outros medicamentos. Mantenha fora do alcance das crianças e armazene em local fresco e seco.
            </Text>
          </View>

          {/* Folha Informátiva */}
          <View className='border-b border-b-gray-200'>
            <View className='flex-row  my-2 items-center gap-x-2'>
              <Text className='text-xl'>Folha Informativa</Text>


            </View>
            <Text className='text-justify text-lg my-3 '>
              Para poder descarregar e visualizar o folheto Informativo, <Link href={".."} className='font-bold underline'>Clique aqui</Link>
            </Text>
          </View>

          {/* outras informações */}

          <View>
            <View className='flex-row  mt-2 mb-10 items-center gap-x-2'>
              <Text className='text-xl'>Outra Informações</Text>
            </View>
            <View className='flex-row justify-between items-center border-b border-b-gray-200 pb-2'>
              <Text className='text-base my-1'>Referência</Text>
              <Text className='text-base my-1'>7072751</Text>
            </View>

            <View className='flex-row justify-between my-5 items-center border-b border-b-gray-200 pb-2'>
              <Text className='text-base my-1'>Marca</Text>
              <Text className='text-base my-1'>Win-Fit</Text>
            </View>

            <View className='flex-row justify-between my-5 items-center border-b border-b-gray-200 pb-2'>
              <Text className='text-base my-1'>Designação</Text>
              <Text className='text-base my-1'>Comprimidos 30</Text>
            </View>

            <View className='flex-row justify-between my-5 items-center border-b border-b-gray-200 pb-2'>
              <Text className='text-base my-1'>Laboratório</Text>
              <Text className='text-base my-1'>Ampliphar</Text>
            </View>

            <View className='flex-row justify-between my-5 items-center border-b border-b-gray-200 pb-2'>
              <Text className='text-base my-1'>Categoria</Text>
              <Text className='text-base my-1'>Sumplementos</Text>
            </View>

            <View className='flex-row justify-between my-5 items-center '>
              <Text className='text-base '>Subcategorias</Text>
              <Text className='text-base'>Costipação</Text>
            </View>
            <View className='flex-row  my-5 items-center border-b border-b-gray-200 pb-2'>
              <IconVectorComponent icon={{
                value: {
                  type: IconType.FontAwesomeIcon,
                  name: "whatsapp"
                },
                size: 30,
                color: "#00665e"
              }} />
              <Text className='text-base m-5'> Para saber mais informações sobre este Produto via WhatsApp, <Link href={".."} className='underline'>Clique aqui</Link> </Text>
            </View>
          </View>



        </View>
      </ScrollView>
      <View className='sticky  bottom-0 bg-gray-100'>
        <TouchableOpacity className='bg-[#00665e] m-5 p-5 rounded-lg' onPress={() => { }}>
          <Text className='font-extrabold text-center text-white text-md'>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}