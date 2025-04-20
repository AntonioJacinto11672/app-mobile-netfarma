import ButtonLargeOpacity from '@/components/ui/ButtonLargeOpacity';
import HomeHeader from '@/components/ui/HomeHeader';
import { Redirect, useNavigation, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Image, Button } from 'react-native';
import OrderItemService from '../../../api/services/OrderItem.service';
import { useCart } from '@/contexts/CartContext';
import { cartProductCalculate } from '@/utils/cartProductCalculate';
import OrderService from '@/api/services/Order.service';
import OrderDetailService from '@/api/services/OrderDetail.service';


const orderItemService = new OrderItemService()
const calculateProductService = new OrderItemService()
const orderDetailService = new OrderDetailService();
const AddressScreen = () => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [netFarmaCheckout, setNetFarmaCheckout] = useState<CalculateResponse | undefined>()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      state: "",
      city: "",
      neighborhood: "",
      street: "",
      number: "",
      complement: "",
    },
  })

  const { cartProducts } = useCart()


  const navigation = useNavigation()
  const router = useRouter()

  /* Passar os valores para calcular */
  const calculateProduct: cartProductCalculate[] | undefined = cartProducts?.map(product => ({
    medicineId: product.id,
    quantity: product.quantity
  }))

  const handleAdddLocation = async (data: any) => {
    try {

      /*  console.log("data: ", data) */
      /* aquui vai guardar os dados e fará o checkou do produto */

      /* Save Email de entrega tmp */
      /* Fazer o Checkout */
      const values = calculateProduct as any
      const result = await orderDetailService.calculate(values)
      console.log("result", result)
      if (result.error) {
        console.log(`O Error é ${result.error}`)

      }

      if (result) {
        localStorage.setItem("netFarmaCheckout", JSON.stringify(result))
        console.log(`O result é ${result}`)
      }

      router.push("/(tabs)/cart/Payment")
    } catch (error) {
      console.log("Error: ", error)

    }
  }

  return (
    <SafeAreaView className='bg-white h-full'>
      <HomeHeader title='Carrinho - Endereço de entrega' />
      <ScrollView>
        <View className='flex-1 bg-white px-8 pt-8'

        >
          <View className='form space-y-2'>
            {/* Complement Input */}
            <View className='space-y-2'>
              <Text className='text-gray-700 ml-4'>Descrição do endereço </Text>
              <Controller
                control={control}
                rules={{
                  required: "campo obrigatório",
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput className={`p-4   bg-gray-100 text-gray-700 rounded-2xl mb-3  ${errors.complement ? ' text-gray-100 outline outline-red-500' : 'outline-blue-500'}`}
                    placeholder='Ex: Casa, trabalho... '
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="complement"
              />
              {errors.complement && <Text className='text-red-500 text-small ml-2'> {errors.complement.message} </Text>}

            </View>
            <View className='space-y-2'>
              <Text className='text-gray-700 ml-4'>Estado / Província </Text>
              <Controller
                control={control}
                rules={{
                  required: "campo obrigatório",
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput className={`p-4   bg-gray-100 text-gray-700 rounded-2xl mb-3  ${errors.state ? ' text-gray-100 outline outline-red-500' : 'outline-blue-500'}`}
                    placeholder='Província ou estado... '
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="state"
              />
              {errors.state && <Text className='text-red-500 text-small ml-2'> {errors.state.message} </Text>}

            </View>

            <View className='space-y-2'>
              <Text className='text-gray-700 ml-4'>Cidade </Text>
              <Controller
                control={control}
                rules={{
                  required: "campo obrigatório",
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput className={`p-4   bg-gray-100 text-gray-700 rounded-2xl mb-3  ${errors.city ? ' text-gray-100 outline outline-red-500' : 'outline-blue-500'}`}
                    placeholder='Qual é a cidade? '
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="city"
              />
              {errors.city && <Text className='text-red-500 text-small ml-2'> {errors.city.message} </Text>}

            </View>

            <View className='space-y-2'>
              <Text className='text-gray-700 ml-4'>Bairro </Text>
              <Controller
                control={control}
                rules={{
                  required: "campo obrigatório",
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput className={`p-4   bg-gray-100 text-gray-700 rounded-2xl mb-3  ${errors.neighborhood ? ' text-gray-100 outline outline-red-500' : 'outline-blue-500'}`}
                    placeholder='Nome do bairro... '
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="neighborhood"
              />
              {errors.neighborhood && <Text className='text-red-500 text-small ml-2'> {errors.neighborhood.message} </Text>}

            </View>

            <View className='space-y-2'>
              <Text className='text-gray-700 ml-4'>Rua </Text>
              <Controller
                control={control}
                rules={{
                  required: "campo obrigatório",
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput className={`p-4   bg-gray-100 text-gray-700 rounded-2xl mb-3  ${errors.street ? ' text-gray-100 outline outline-red-500' : 'outline-blue-500'}`}
                    placeholder='Nome da rua'
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="street"
              />
              {errors.street && <Text className='text-red-500 text-small ml-2'> {errors.street.message} </Text>}

            </View>

            <View className='space-y-2'>
              <Text className='text-gray-700 ml-4'>Número </Text>
              <Controller
                control={control}
                rules={{
                  required: "campo obrigatório",
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput className={`p-4   bg-gray-100 text-gray-700 rounded-2xl mb-3  ${errors.number ? ' text-gray-100 outline outline-red-500' : 'outline-blue-500'}`}
                    placeholder='Número da casa ou apartamento... '
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="number"
              />
              {errors.number && <Text className='text-red-500 text-small ml-2'> {errors.number.message} </Text>}

            </View>
            <ButtonLargeOpacity text='Proximo Passo' anable={true} onPress={handleSubmit(handleAdddLocation)} />
          </View>




        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AddressScreen;
