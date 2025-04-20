import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { MagnifyingGlassIcon } from 'react-native-heroicons/solid';

const SearchLocalition = () => {
    return (
        <View>
            <View>
                <Text className="text-black text-xl font-bold mx-5 mt-5">Qual é o seu endereço de entrega?</Text>
                <Text className='text-gray-500 mx-5 mt-2 text-base '>
                    Por favor, pesquise o seu endereço no mapa e posicione o pin no local exato para garantir uma melhor experiência na entrega.
                </Text>
            </View>


            <Text className="text-black text-lg font-bold mx-5 mt-5">Pesquisar endereço</Text>
            <View className="flex-row items-center space-x-2  mx-5 my-5 ">
                <View className="flex-row flex-1 space-x-2 bg-[#00665e] p-3 rounded-full ">
                    <MagnifyingGlassIcon color={"white"} size={20} className='mt-2' />
                    <TextInput placeholder="Buscar endereço" keyboardType="default" className="text-white w-full p-2 outline-none" />
                </View>
            </View>
        </View>

    );
}

export default SearchLocalition;
