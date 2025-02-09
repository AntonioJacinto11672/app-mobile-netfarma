import { View, Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon, XCircleIcon } from 'react-native-heroicons/solid'
import TitleCategories from '@/components/card/TitleCategories'
import PostCard from '@/components/card/PostCard'
import ProductCard from '@/components/card/ProductCard'
import SearchComponent from '@/components/SearchComponent'
import HomeHeader from '@/components/ui/HomeHeader'

export default function Promotion() {
  return (
    <SafeAreaView className='bg-white'>
      {/* Search */}
      <HomeHeader title='Promoções' />

      <View className='bg-gray-100 '>
        <SearchComponent />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className='bg-gray-100'>
        {/* Post - Publicações */}
        <View className=''>
          {/* Title */}
          <TitleCategories title='Campanha' onPress={() => { }} />

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
              urlImg={require('../../../assets/images/medicine/5.jpg')}
              bottonName='Promoções' />

            <PostCard
              title='Titúlo do Produto'
              description='Descrição do Produto'
              datePub={new Date("2024-12-31")}
              urlImg={require('../../../assets/images/medicine/6.jpg')}
              bottonName='Promoções' />

            <PostCard
              title='Titúlo do Produto'
              description='Descrição do Produto'
              datePub={new Date("2024-12-31")}
              urlImg={require('../../../assets/images/medicine/7.jpg')}
              bottonName='Promoções' />

          </ScrollView>
        </View>


        {/* Products */}


        <View>
          {/* Title */}
          <TitleCategories title='Produtos em destaque' onPress={() => { }} />

          <View className='flex-row flex-wrap mx-7 gap-2'>
            <ProductCard title='Titúlo do Produto' description='Descrição do Produto' price={1000} urlImg={require('../../../assets/images/medicine/2.png')} />
            <ProductCard title='Titúlo do Produto' description='Descrição do Produto' price={1000} urlImg={require('../../../assets/images/medicine/3.png')} />
            <ProductCard title='Titúlo do Produto' description='Descrição do Produto' price={1000} urlImg={require('../../../assets/images/medicine/2.png')} />
            <ProductCard title='Titúlo do Produto' description='Descrição do Produto' price={1000} urlImg={require('../../../assets/images/medicine/3.png')} />

            <ProductCard title='Titúlo do Produto' description='Descrição do Produto' price={1000} urlImg={require('../../../assets/images/medicine/2.png')} />
            <ProductCard title='Titúlo do Produto' description='Descrição do Produto' price={1000} urlImg={require('../../../assets/images/medicine/3.png')} />

            <ProductCard title='Titúlo do Produto' description='Descrição do Produto' price={1000} urlImg={require('../../../assets/images/medicine/2.png')} />
            <ProductCard title='Titúlo do Produto' description='Descrição do Produto' price={1000} urlImg={require('../../../assets/images/medicine/3.png')} />

          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}