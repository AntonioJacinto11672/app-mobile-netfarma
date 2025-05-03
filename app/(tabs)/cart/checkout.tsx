import { View, Text, SafeAreaView, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import HomeHeader from '@/components/ui/HomeHeader'
import { Link, useRouter } from 'expo-router'
import { ThemedText } from '@/components/ThemedText'
import TouchableFixed from '@/components/ui/TouchableFixed'
import CartFull from '@/components/CartComponentes/CartFull'
import CartEmpty from '@/components/CartComponentes/CartEmpty'
import { useCart } from '@/contexts/CartContext'
import { cartProductCalculate } from '@/utils/cartProductCalculate'
import OrderItemService from '@/api/services/OrderItem.service'
import OrderDetailService from '@/api/services/OrderDetail.service'
import { useAuth } from '@/contexts/AuthContext'
import OrderService from '@/api/services/Order.service'


const orderItemService = new OrderItemService()
const orderDetailService = new OrderDetailService();
const useOrder = new OrderService();
export default function checkout() {
  const router = useRouter();
  const { cartProducts, cartTotalAmount, handleClearCart } = useCart()
  const [isCheckout, setIsCheckout] = useState(false);
  const [netFarmaCheckout, setNetFarmaCheckout] = useState<CalculateResponse | undefined>()
  const { user } = useAuth()


  const handleGo = () => {
    router.replace("/(tabs)/cart/AddressScreen")
  }
  /* Passar os valores para calcular */
  const calculateProduct: cartProductCalculate[] | undefined = cartProducts?.map(product => ({
    medicineId: product.id,
    quantity: product.quantity
  }))

  const handleCkeckout = async () => {
    /*  console.log("Checkout") */
    /*  console.log("data: ", data) */
    /* aquui vai guardar os dados e fará o checkou do produto */

    /* Save Email de entrega tmp
      Criar o pedido aqui e depois fazer o checkout */

    /* Fazer o Checkout */
    const values = calculateProduct as any
    const result = await orderDetailService.calculate(values)

    /* console.log("result", result) */
    if (result.error) {
      console.log(`O Error é ${result.error}`)

    }

    if (result) {
      /* console.log(`O result é 3 result aqui`, result) */
      localStorage.setItem("netFarmaCheckout", JSON.stringify(result))

    }


    //Criar Pedido

    //1º Verificar se o usuario está logado
    if (!user) {
      router.replace("/(auth)/login")
      console.log("Usuário não autenticado!")
      throw new Error('Usuário não autenticado!');
    }


    //2º Criar o pedido

    const resultCreateOrder = await useOrder.createOrder(user.id)


    if (resultCreateOrder.error) {
      console.log("O Error é " + resultCreateOrder.error)
      /* throw new Error(`Erro ao criar pedido: ${resultCreateOrder.error}`) */
      /* 
      Amanhã verificar o que está acontecendo aqui, pois não está criando o pedido
      console.log("Erro ao criar pedido", resultCreateOrder.error)
      nem mostara error, fazer console.log em todos os result sem por error
      */
    }

    if (resultCreateOrder) {

      //3º Criar os itens do pedido
      const dataCheckoutStr: any = localStorage.getItem("netFarmaCheckout");
      const dataCheckoutObj: CreateOrderDetailRequest | null = JSON.parse(dataCheckoutStr);
      /* console.log("resultCreateOrder aqui", resultCreateOrder) */
      const id = dataCheckoutStr?.id
      /* console.log("dataCheckoutStr aqui 2", id) */
      if (!dataCheckoutStr) {


        console.log("Dados do checkout não encontrados!")
        throw new Error('Dados do checkout não encontrados');
      }


      const dataCheckout = JSON.parse(dataCheckoutStr);
      /* console.log("resultCreate Order", resultCreateOrder) */
      const idOrder = resultCreateOrder as any

      if (resultCreateOrder) {
        const requestRegisterOrder: CreateOrderDetailRequest = {
          orderId: idOrder.id as any,
          taxAmount: dataCheckout.taxAmount,
          imposedId: dataCheckout.imposedId,
          expenseId: dataCheckout.expenseId,
          amountPaid: dataCheckout.amountPaid,
          deliveryAmount: dataCheckout.deliveryAmount
        };

        // Registrar os detalhes do pedido
        const resultRegisterOrderDetail = await orderDetailService.registerOrder(requestRegisterOrder);
        if (resultRegisterOrderDetail) {
          console.log('Detalhes do pedido registrados com sucesso.');

          // Registrar os itens do pedido
          
          if (Array.isArray(dataCheckout.orderItems)) {
            
            const idOrderDetail = resultCreateOrder as any;

            console.log("id do datackeckout", dataCheckout.orderItems);
            await Promise.all(dataCheckout.orderItems.map(async (e: any) => {
              console.log("Quantity ", e.quantity, " Medicine", e.medicineId)
              const resultCreateOrderItem = await orderItemService.createOrderItem(e.quantity, e.medicineId,idOrderDetail.id);
              if (resultCreateOrderItem && resultCreateOrderItem != null) {
                console.log(resultCreateOrderItem)
                console.log(`Item do pedido ${resultCreateOrderItem} registrado com sucesso.`);

              }
              else {
                console.log("Erro ao cadastrar Order item", resultRegisterOrderDetail)
              }
            }));
          }

        } else {
          console.log("Erro ao cadastrar orderDetail", resultRegisterOrderDetail)
        }

        /* Terminar e limpar os  */
        handleClearCart()
        /* localStorage.removeItem("netFarmaCheckout") */
        /* 
         Nota para relembrar, precisamos pegar o valor a ser pago, caso não termina o de fazer a compra e o pedido já está feito 

        */
        localStorage.removeItem("netFarmaCartItemsOrder")
        /* Faltando o toast Ou Alert */
        router.replace("/cart/Payment")

        console.log("Pedido finalizado com sucesso!")
      }
    }


  }

  return (
    <SafeAreaView className='bg-white h-full'>
      <HomeHeader title='Checkout' />

      <View className="flex-row justify-between mx-5 px-5 text-xs gap-4 pb-2  mt-8 font-semibold ">
        <View className="">PRODUCTO</View>
        <View className="">PREÇO</View>
        <View className="">QUANTIDADE</View>
        <View className="">TOTAL</View>
      </View>



      <ScrollView>
        <FlatList
          data={cartProducts}
          renderItem={({ item }) => <CartFull key={item.id} item={item} touchableAnable />}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={<CartEmpty />}

        />
      </ScrollView>
      <TouchableFixed title='Checkout' total={cartTotalAmount} subtotal={cartTotalAmount} onPress={handleCkeckout} />

    </SafeAreaView>
  )
}