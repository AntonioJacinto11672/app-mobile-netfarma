import { getRandomNumber } from '@/utils/getRandomNumber';
import { Link } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, type TextProps, TouchableOpacity, ScrollView } from 'react-native';
import IconVectorComponent, { IconType } from '../IconVectorComponent';

const MulticaixaReferencePayment = () => {
  const [referencia, setReferencia] = useState<number>()
  const copyRferencia = (value: number) => {


    navigator.clipboard.writeText(value.toString())
      .then(() => console.log("Referência copiada..."))
      .catch(err => console.log("Erro ao copiar o texto"))


  }
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
        <Text className='text-center font-extrabold text-xl mb-5'>Escolheu pagar por trânsferência bancária. A <Text>Acima  </Text></Text>

        <Text className='text-center text-lg mb-5'>Valor á pagar: 0 </Text>
        <Text className="font-bold text-black className='text-center text-lg mb-5'">Passo  1</Text>
        {referencia ? <Text className="font-bold not-italic text-gray-900" > Referência: <Text id="textTocopy">{referencia} </Text> <Text className="absolute  mx-2 text-xl" onPress={() => { copyRferencia(referencia) }}>   <IconVectorComponent icon={{
          value: {
            type: IconType.MaterialIcon,
            name: "assessment"
          }, color: "black", size: 22
        }} /> </Text> </Text> :
          <TouchableOpacity className="text-blue-600 active:text-pink-400" onPress={() => { setReferencia(getRandomNumber(99999999, 1000000000)) }}>  Gerar Id de Referência </TouchableOpacity>
        }
        <Text className='text-center text-base mb-2'>Passo 2</Text>
        <Text className='text-center text-md mb-2'>Vai até a um multicaixa ou Serviço bancario na internet escolhe pagamento por referencia</Text>
        <Text className='text-center text-md mb-2'> ensira o código da entidade 00384</Text>
        <Text className='text-center text-md mb-2'> introduza o número da referencia gerada em cima</Text>
        <Text className='text-center text-md mb-2'>  Introduza o valor refente ao pagamento dos teu pedido</Text>
      </View>
    </ScrollView>
  );
}

export default MulticaixaReferencePayment;
