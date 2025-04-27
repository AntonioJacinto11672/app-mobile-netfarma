import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import IconVectorComponent, { IconType } from '../IconVectorComponent';
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'expo-router';

const ExpressPayment = () => {


  const amountPaid = 0
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      amount: "",
      phoneNumber: ""
    },
  })

  
  return (
    <ScrollView className=''>
      <View className='flex-col items-center px-5'>
        <TouchableOpacity className=' border-2 rounded-full p-6 border-[#00665e] my-4'>
          <IconVectorComponent icon={{
            value: {
              type: IconType.FontAwesomeIcon,
              name: "shopping-cart"
            },
            size: 40,
            color: '#00665e'
          }} />
        </TouchableOpacity>
        <Text className='text-center font-extrabold text-xl mb-5'>Pagamento via Multicaixa Express</Text>
        <Text className='text-base text-gray-400'>Digite seu número de Telefone Associnado ao Multicaixa Express Abaixo.</Text>
        <Text className='text-base text-gray-400'> Clique em finalizar e aprove o pagamento pelo aplicativo Express</Text>
        <View>

          <View className='space-y-2'>
            <Text className='text-gray-700 ml-4'>Valor a ser pago </Text>
            <Controller
              control={control}
              rules={{
                required: "campo obrigatório",
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput className={`p-4   bg-gray-500 text-gray-100 rounded-2xl mb-3 w-96 cursor-not-allowed  ${errors.amount ? ' text-gray-100 outline outline-red-500' : 'outline-blue-500'}`}
                  placeholder='Valor a ser pago '
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  aria-disabled
                />
              )}
              name="amount"
            />
            {errors.amount && <Text className='text-red-500 text-small ml-2'> {errors.amount.message} </Text>}

          </View>

          <View className='space-y-2'>
            <Text className='text-gray-700 ml-4'>Número do Telefone </Text>
            <Controller
              control={control}
              rules={{
                required: "campo obrigatório",
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput className={`p-4   bg-gray-500 text-gray-100 rounded-2xl mb-3  ${errors.phoneNumber ? ' text-gray-100 outline outline-red-500' : 'outline-blue-500'}`}
                  placeholder='(+244) 000 000 000'
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="phoneNumber"
            />
            {errors.phoneNumber && <Text className='text-red-500 text-small ml-2'> {errors.phoneNumber.message} </Text>}

          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default ExpressPayment;
