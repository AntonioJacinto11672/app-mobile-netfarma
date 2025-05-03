import OrderService from '@/api/services/Order.service';
import OrderItemService from '@/api/services/OrderItem.service';
import { OrderItem } from '@/components/CartComponentes/OrderFull';
import HomeHeader from '@/components/ui/HomeHeader';
import { FormatPrice } from '@/utils/FormPrice';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const orderItensService = new OrderItemService()
const OrderItens = () => {
  const [orderItens, setOrderItens] = React.useState<OrderItem[]>([]);
  const params = useLocalSearchParams()

  useEffect(() => {
    getOrderItens()
  }, [])

  const getOrderItens = async () => {

    try {
      const idOrder = params.id as string;
      const res = await orderItensService.getOrderItemByOrderId(idOrder);
      console.log("Order Itens", res.data);


      if (res.data) {
        const orderResItens = res as any
        setOrderItens(orderResItens.data)
        console.log("Order Itens", orderResItens);
      }
    } catch (error) {
      console.error("Error fetching order items:", error);
    }

  }

  return (
    <SafeAreaView className="bg-white h-full">
      <HomeHeader atateGoBack title='Carrinho' />
      <View className="m-4">
        {/* Cabeçalho */}
        <View className="flex-row bg-gray-300 p-2 rounded-t-md">
          <Text className="flex-1 font-bold  text-[#00665e]">#</Text>
          <Text className="w-[25%] font-bold text-center text-[#00665e]">Nome do Produto</Text>
          <Text className="w-[25%] font-bold text-center  text-[#00665e]">quantidade</Text>
          <Text className="w-[25%] font-bold text-center  text-[#00665e]">Preço</Text>
          <Text className="w-[25%] font-bold text-center  text-[#00665e]">Total</Text>
          <Text className="w-[25%] font-bold text-center  text-[#00665e] "></Text>
        </View>
        {orderItens.length > 0 ? (
          orderItens.map((item, index) => (
            <View key={item.id} className={`flex-row p-2 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
              <Text className="flex-1">{index + 1}</Text>
              <Text className="w-[25%] text-center">{item.medicine.name}</Text>
              <Text className="w-[25%] text-center">{FormatPrice(item.quantity)}</Text>
              <Text className="w-[25%] text-center">{FormatPrice(item.medicine.price)}</Text>
              <Text className="w-[25%] text-center">{FormatPrice(item.medicine.price * item.quantity)}</Text>
              <Text className="w-[25%] text-center">Imagens</Text>
            </View>
          ))
        ) : (
          <View className="flex-1 items-center justify-center">
            <Text className="text-gray-500">Nenhum item encontrado.</Text>
          </View>
        )}

      </View>
    </SafeAreaView>
  );
}

export default OrderItens;
