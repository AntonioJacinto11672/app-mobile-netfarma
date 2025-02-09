import { View, Text, Image, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon, AdjustmentsHorizontalIcon } from "react-native-heroicons/outline"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SubmitRecipeComponent from '@/components/SubmitRecipeComponent';
import IconVectorComponent, { IconType } from '@/components/IconVectorComponent';
import ProductCard from '@/components/card/ProductCard';
import TitleCategories from '@/components/card/TitleCategories';
import ColletionBotton from '@/components/card/ColletionBotton';
import PostCard from '@/components/card/PostCard';
import { Link, useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter()

  const onPressTest = () => {
    console.log("OnPress Test 1")
  }
  return (
    <SafeAreaView className='pt-5  bg-white dark:bg-black h-full'>
      {/* Main */}
      <View className='mt-7'>

        <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
          <Image
            source={{
              uri: "https://links.papareact.com/wru"
            }}
            className="h-9 w-9 rounded-full bg-gray-300 "
          />

          <View className="flex-1">
            <TouchableOpacity>
              <Text className="font-bold text-gray-400 text-xs">Entrega Agora!</Text>
              <Text className="font-bold text-xl">Localização actual
                <ChevronDownIcon color={"#00665e"} size={20} />
              </Text>
            </TouchableOpacity>
          </View>

          <UserIcon size={35} color={"#00665e"} />
        </View>


        <ScrollView className='bg-gray-50'>
          <View className='flex-row justify-around px-1 mx-2'>
            <SubmitRecipeComponent text='Enviar Receita Médica' icon={{
              size: 22, color: "#00665e",
              value: { type: IconType.FontAwesome6Icon, name: "comment-medical" }
            }} onPress={() => { router.push("/home/SendRecipeScreen") }} key={1} />

            <SubmitRecipeComponent text='Requisitar Produto' icon={{
              size: 22, color: "#00665e",
              value: { type: IconType.FontAwesome5Icon, name: 'laptop-medical' }
            }} onPress={() => { router.push("/home/RequestScreen") }} key={2} />

            <SubmitRecipeComponent text='Receitas e Requisições' icon={{
              size: 22, color: "#00665e",
              value: { type: IconType.FontAwesome5Icon, name: 'notes-medical' }
            }} onPress={() => { router.push("/home/RecipeRequestScreen") }} key={3} />

            <SubmitRecipeComponent text='Medições de Saúde' icon={{
              size: 22, color: "#00665e",
              value: { type: IconType.FontAwesome5Icon, name: 'briefcase-medical' }
            }} onPress={() => { router.push("/(tabs)/home/HealthMedicationScreen") }} key={4} />

          </View>


          {/* Products */}


          <View>
            {/* Title */}
            <TitleCategories title='Produtos em destaque' onPress={() => { }} />

            <ScrollView
              horizontal
              contentContainerStyle={{
                paddingHorizontal: 15,
                paddingVertical: 10
              }}
              showsHorizontalScrollIndicator={false}
              className='pt-4 px-2'
            >
              <ProductCard title='Titúlo do Produto' description='Descrição do Produto' price={1000} urlImg={require('../../../assets/images/medicine/2.png')} />
              <ProductCard title='Titúlo do Produto' description='Descrição do Produto' price={1000} urlImg={require('../../../assets/images/medicine/3.png')} />
              <ProductCard title='Titúlo do Produto' description='Descrição do Produto' price={1000} urlImg={require('../../../assets/images/medicine/2.png')} />
              <ProductCard title='Titúlo do Produto' description='Descrição do Produto' price={1000} urlImg={require('../../../assets/images/medicine/3.png')} />
              <ProductCard title='Titúlo do Produto' description='Descrição do Produto' price={1000} urlImg={require('../../../assets/images/medicine/2.png')} />

            </ScrollView>
          </View>


          <View>
            <TitleCategories onPress={() => { }} title='Coleções' />
            <ScrollView
              horizontal
              contentContainerStyle={{
                paddingHorizontal: 15,
                paddingVertical: 10
              }}
              showsHorizontalScrollIndicator={false}
              className='pt-4 px-2'
            >
              <ColletionBotton title="Borion" />
              <ColletionBotton title="Borion" />
              <ColletionBotton title="Borion" />
              <ColletionBotton title="Borion" />
            </ScrollView>

            {/*  */}
          </View>



          {/* Eventos */}
          <View className=''>
            {/* Title */}
            <TitleCategories title='Eventos' onPress={() => { }} />

            <ScrollView
              horizontal
              contentContainerStyle={{
                paddingHorizontal: 15,
                paddingVertical: 10
              }}
              showsHorizontalScrollIndicator={false}
              className='px-2'
            >
              <PostCard
                title='Titúlo do Produto'
                description='Descrição do Produto'
                datePub={new Date("2024-12-31")}
                urlImg={require('../../../assets/images/medicine/8.jpg')}
                bottonName='Acompanhamento' />


            </ScrollView>
          </View>

          {/* Acesso Rápido */}
          <View className=''>

            <View className='flex-row px-5 py-2 items-center space-x-2'>
              <Text className='flex-1 font-extrabold text-lg dark:text-white'> Acessos Rápidos</Text>
            </View>

            <View className='p-5  flex-row  gap-4 flex-wrap'>

              <TouchableOpacity className='flex-row bg-gray-100 p-5 w-44 justify-between rounded-lg mr-2'>
                <Text>Comunicações</Text>
                <IconVectorComponent icon={{
                  value: {
                    type: IconType.FoundationIcon,
                    name: "volume-none"
                  },
                  size: 22,
                  color: "#00665e"
                }} />
              </TouchableOpacity>

              <TouchableOpacity className='flex-row bg-gray-100 p-5 w-44 justify-between rounded-lg mr-2'>
                <Text>Eventos</Text>
                <IconVectorComponent icon={{
                  value: {
                    type: IconType.FontAwesome6Icon,
                    name: "calendar-day"
                  },
                  size: 22,
                  color: "#00665e"
                }} />
              </TouchableOpacity>

              <TouchableOpacity className='flex-row bg-gray-100 p-5 w-44 justify-between rounded-lg mr-2'>
                <Text>Promoções</Text>
                <IconVectorComponent icon={{
                  value: {
                    type: IconType.MaterialCommunityIcon,
                    name: "brightness-percent"
                  },
                  size: 22,
                  color: "#00665e"
                }} />
              </TouchableOpacity>

              <TouchableOpacity className='flex-row bg-gray-100 p-5 w-44 justify-between rounded-lg mr-2'>
                <Text>Coleções</Text>
                <IconVectorComponent icon={{
                  value: {
                    type: IconType.FontAwesome6Icon,
                    name: "puzzle-piece"
                  },
                  size: 22,
                  color: "#00665e"
                }} />
              </TouchableOpacity>
            </View>

          </View>

          <View className='bg-gray-100 p-5 '>
            <Text className='text-xl font-extrabold mb-5'>NetFarma - Saúde em um click</Text>
            <View className=''>
              <Text className='mb-5'>Segunda a Domingo - 08:00 - 21:30</Text>
              <Text>Contacto:</Text>
              <Text className='text-sm'>(+222) 222 333 222 Chamada Para redefixa nacional</Text>
              <Text className='text-sm'>(+244) 923 000 000 Chamada para rede Móvel</Text>
            </View>
            {/* Social Mídea */}
            <View className='flex-row gap-4 my-5'>

              <TouchableOpacity>
                <IconVectorComponent icon={{
                  value: {
                    type: IconType.FontAwesomeIcon,
                    name: "instagram"
                  },
                  size: 22,
                  color: "#00665e"
                }} />
              </TouchableOpacity>


              <TouchableOpacity>
                <IconVectorComponent icon={{
                  value: {
                    type: IconType.FontAwesomeIcon,
                    name: "facebook"
                  },
                  size: 22,
                  color: "#00665e"
                }} />
              </TouchableOpacity>

              <TouchableOpacity>
                <IconVectorComponent icon={{
                  value: {
                    type: IconType.FontistoIcon,
                    name: "whatsapp"
                  },
                  size: 22,
                  color: "#00665e"
                }} />
              </TouchableOpacity>



            </View>
          </View>


        </ScrollView>
      </View>
    </SafeAreaView>
  )
}