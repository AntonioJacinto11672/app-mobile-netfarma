import HomeHeader from '@/components/ui/HomeHeader';
import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Payment = () => {
    return (
        <SafeAreaView className='bg-white h-full'>
        <HomeHeader title='Pagamento - metodo de pagamento' />
        </SafeAreaView>
    );
}

export default Payment;
