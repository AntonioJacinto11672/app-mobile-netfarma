import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import ProductCard from '@/components/card/ProductCard'
import TitleCategories from '@/components/card/TitleCategories'
import SearchComponent from '@/components/SearchComponent'
import SubmitRecipeComponent from '@/components/SubmitRecipeComponent'
import { IconType } from '@/components/IconVectorComponent'

export default function ProductScreen() {
  return (
    <SafeAreaView>
      <SearchComponent />

      <ScrollView>

        {/* Menu de Receitas */}
        <ScrollView
          horizontal
          contentContainerStyle={{
            paddingHorizontal: 15,
            paddingVertical: 1
          }}
          showsHorizontalScrollIndicator={false}
          className=''
        >
          <SubmitRecipeComponent text='Bebé e mamã' icon={{ value: { type: IconType.FontAwesome6Icon, name: 'comment-medical' }, size: 22, color: "#00665e" }} />
          <SubmitRecipeComponent text='Cosmética' icon={{ value: { type: IconType.FontAwesome5Icon, name: 'laptop-medical' }, size: 22, color: "#00665e" }} />
          <SubmitRecipeComponent text='Dietético' icon={{ value: { type: IconType.FontAwesome5Icon, name: 'notes-medical' }, size: 22, color: "#00665e" }} />
          <SubmitRecipeComponent text='Dispositivo' icon={{ value: { type: IconType.FontAwesome5Icon, name: 'briefcase-medical' }, size: 22, color: "#00665e" }} />
          <SubmitRecipeComponent text='Hiegenico' icon={{ value: { type: IconType.FontAwesome5Icon, name: 'briefcase-medical' }, size: 22, color: "#00665e" }} />
          <SubmitRecipeComponent text='Mat. Prima' icon={{ value: { type: IconType.FontAwesome5Icon, name: 'briefcase-medical' }, size: 22, color: "#00665e" }} />
          <SubmitRecipeComponent text='Medicamentos' icon={{ value: { type: IconType.FontAwesome5Icon, name: 'briefcase-medical' }, size: 22, color: "#00665e" }} />
          <SubmitRecipeComponent text='Sumpelemntos' icon={{ value: { type: IconType.FontAwesome5Icon, name: 'briefcase-medical' }, size: 22, color: "#00665e" }} />
          <SubmitRecipeComponent text='Veterinária' icon={{ value: { type: IconType.FontAwesome5Icon, name: 'briefcase-medical' }, size: 22, color: "#00665e" }} />
        </ScrollView>

        {/* Products */}


        <View>
          {/* Title */}
          <TitleCategories title='Produtos em Recomendados' onPress={() => { }} />

          <ScrollView
            horizontal
            contentContainerStyle={{
              paddingHorizontal: 15,
              paddingVertical: 15
            }}
            showsHorizontalScrollIndicator={false}
            className='pt-4 px-2'
          >
            <ProductCard title='Titúlo do Produto' description='Descrição do Produto' price={1000} urlImg={require('../../assets/images/medicine/2.png')} />
            <ProductCard title='Titúlo do Produto' description='Descrição do Produto' price={1000} urlImg={require('../../assets/images/medicine/3.png')} />
            <ProductCard title='Titúlo do Produto' description='Descrição do Produto' price={1000} urlImg={require('../../assets/images/medicine/2.png')} />
            <ProductCard title='Titúlo do Produto' description='Descrição do Produto' price={1000} urlImg={require('../../assets/images/medicine/3.png')} />
            <ProductCard title='Titúlo do Produto' description='Descrição do Produto' price={1000} urlImg={require('../../assets/images/medicine/2.png')} />

          </ScrollView>
        </View>

        <View>
          {/* Title */}
          <TitleCategories title='Todos os Produtos' onPress={() => { }} />

          <View className='flex-row flex-wrap mx-7 gap-2'>
            <ProductCard title='Titúlo do Produto' description='Descrição do Produto' price={1000} urlImg={require('../../assets/images/medicine/2.png')} />
            <ProductCard title='Titúlo do Produto' description='Descrição do Produto' price={1000} urlImg={require('../../assets/images/medicine/3.png')} />
            <ProductCard title='Titúlo do Produto' description='Descrição do Produto' price={1000} urlImg={require('../../assets/images/medicine/2.png')} />
            <ProductCard title='Titúlo do Produto' description='Descrição do Produto' price={1000} urlImg={require('../../assets/images/medicine/3.png')} />

            <ProductCard title='Titúlo do Produto' description='Descrição do Produto' price={1000} urlImg={require('../../assets/images/medicine/2.png')} />
            <ProductCard title='Titúlo do Produto' description='Descrição do Produto' price={1000} urlImg={require('../../assets/images/medicine/3.png')} />

            <ProductCard title='Titúlo do Produto' description='Descrição do Produto' price={1000} urlImg={require('../../assets/images/medicine/2.png')} />
            <ProductCard title='Titúlo do Produto' description='Descrição do Produto' price={1000} urlImg={require('../../assets/images/medicine/3.png')} />

          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}