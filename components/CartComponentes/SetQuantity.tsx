import { CartProductType } from '@/utils/cartType';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import IconVectorComponent, { IconType } from '../IconVectorComponent';

interface SetQuantityProps {
    cartCounter?: boolean;
    cartProduct: CartProductType;
    handleQtyIncrease: () => void,
    handleQtyDecrease: () => void,
}
const SetQuantity = (item: SetQuantityProps) => {
    return (
        <>
            {
                item.cartCounter ? null : (<View className='flex-row items-center justify-center gap-2'>
                    <TouchableOpacity className='bg-gray-200 rounded-full p-2' onPress={item.handleQtyDecrease}>
                        <IconVectorComponent icon={{
                            value: {
                                type: IconType.AntDesignIcon,
                                name: "minus"
                            },
                            size: 20,
                            color: "#00665e"
                        }} />
                    </TouchableOpacity>
                    <Text className='font-bold text-lg'> {item.cartProduct.quantity} </Text>
                    <TouchableOpacity className='bg-gray-200 rounded-full p-2' onPress={item.handleQtyIncrease}>
                        <IconVectorComponent icon={{
                            value: {
                                type: IconType.AntDesignIcon,
                                name: "plus"
                            },
                            size: 20,
                            color: "#00665e"
                        }} />
                    </TouchableOpacity>

                </View> ) 
        }
        </>
    );
}

export default SetQuantity;
