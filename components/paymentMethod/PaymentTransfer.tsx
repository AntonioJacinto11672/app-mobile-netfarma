import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import IconVectorComponent, { IconType } from '../IconVectorComponent';

const PaymentTransfer = () => {
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
        <Text className='text-center font-extrabold text-xl mb-5'>Escolheu pagar por trânsferência bancária. Aqui um breve resumo da sua encomenda: <Text>Acima  </Text></Text>

        <Text className='text-center text-lg mb-5'>Quanda Adicionar produto ou pedido ao Carrinho, eles vão ser apresentado aqui </Text>


        <Text className='text-center text-lg mb-5'>- O Valor total da sua encomenda:<Text className="font-semibold"> {0} </Text></Text>
        <Text className='text-center text-lg mb-5'>- Permitimos o pagamento por transferência bancária na seguinte moeda:  <Text className="font-semibold">KWANZA</Text></Text>
        <Text className='text-center text-lg mb-5'>- A informação sobre os dados da tranfência bancária serão mostradas na traferênia bancária</Text>
        <Text className='text-center text-lg mb-5'>- Por favor confirma a sua encomenda por clicar em <Text className="font-bold">"Seguinte"</Text></Text>
        <Text className='text-center text-lg mb-5'>- ATENÇÂO: Antes de continuar, confirme por favor se os dados da fatura estão correcto</Text>
      </View>
    </ScrollView>
  );
}

export default PaymentTransfer;
