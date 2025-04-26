import IconVectorComponent, { IconType } from '@/components/IconVectorComponent';
import ExpressPayment from '@/components/paymentMethod/ExpressPayment';
import MulticaixaReferencePayment from '@/components/paymentMethod/MulticaixaReferencePayment';
import PaymentTransfer from '@/components/paymentMethod/PaymentTransfer';
import HomeHeader from '@/components/ui/HomeHeader';
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Payment = () => {
    const paymentComponents = [
        <PaymentTransfer />,
        <MulticaixaReferencePayment />,
        <ExpressPayment />,


    ]
    const [valueComponent, setValueComponent] = useState<number>(0)

    return (
        <SafeAreaView className='bg-white h-full'>
            <HomeHeader title='Pagamento - Método de Pagamento' />


            <ScrollView className=''>

                <View className=' flex-row justify-between items-center  border-b border-gray-200 my-4 px-5'>
                    <TouchableOpacity className={`flex-row items-center gap-2   ${valueComponent === 0 ? 'border-b-2 border-[#00665e]' : ''}`} onPress={() => setValueComponent(0)}>
                        <IconVectorComponent icon={{
                            value: {
                                type: IconType.MaterialIcon,
                                name: "payment"
                            },
                            size: 19,
                            color: valueComponent === 0 ? '#00665e' : 'gray'
                        }} />
                        <Text className={` text-md font-semibold my-2 ${valueComponent === 0 ? 'text-[#00665e]' : 'text-gray-500'}`}>Pagamento por transferência</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className={`flex-row items-center gap-2   ${valueComponent === 1 ? 'border-b-2 border-[#00665e]' : ''}`} onPress={() => setValueComponent(1)}>
                        <IconVectorComponent icon={{
                            value: {
                                type: IconType.MaterialIcon,
                                name: "payment"
                            },
                            size: 19,
                            color: valueComponent === 1 ? '#00665e' : 'gray'
                        }} />
                        <Text className={` text-md font-semibold my-2 ${valueComponent === 1 ? 'text-[#00665e]' : 'text-gray-500'}`}>Pagamento Referência</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className={`flex-row items-center gap-2   ${valueComponent === 2 ? 'border-b-2 border-[#00665e]' : ''}`} onPress={() => setValueComponent(2)}>
                        <IconVectorComponent icon={{
                            value: {
                                type: IconType.MaterialIcon,
                                name: "payment"
                            },
                            size: 19,
                            color: valueComponent === 2 ? '#00665e' : 'gray'
                        }} />
                        <Text className={` text-md font-semibold my-2 ${valueComponent === 2 ? 'text-[#00665e]' : 'text-gray-500'}`}>Multicaixa Express</Text>
                    </TouchableOpacity>

                </View>

                <View>
                    {/* <Text>Components</Text> */}
                    {paymentComponents[valueComponent]}
                </View>
            </ScrollView>

            <TouchableOpacity className='bg-[#00665e] p-4 rounded-lg mx-5 my-3'>
                <Text className='text-white text-center text-lg font-semibold'>Finalizar Compra</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Payment;
