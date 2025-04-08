import { CartContextProvider } from '@/hooks/useCart1';
import React from 'react';
import { View, Text } from 'react-native';

interface cartProviderProps {
    children: React.ReactNode;
}

const CartProvider: React.FC<cartProviderProps> = ({ children }) => {
    return (
        <CartContextProvider>
            {children}
        </CartContextProvider>
    );
}

export default CartProvider;
