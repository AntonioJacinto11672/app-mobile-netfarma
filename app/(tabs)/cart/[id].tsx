import HomeHeader from '@/components/ui/HomeHeader';
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const OrderItens = () => {
  return (
    <SafeAreaView className="bg-white h-full">
       <HomeHeader atateGoBack title='Carrinho' />
    </SafeAreaView>
  );
}

export default OrderItens;
