import { CartProductType } from '@/utils/cartType';
import React, { createContext, useCallback, useContext, useState } from 'react';

interface CartContextType {
    handleAddProductToCart: (product: CartProductType) => void;
    cartProducts: CartProductType[] | null;
    paymentIntent: string | null,

}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
    /* Var */
    const [cartTotalQty, setCartTotalQty] = useState(0)
    const [cartTotalAmount, setCartTotalAmount] = useState(0)
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null)
    const [paymentIntent, setPaymentIntent] = useState<string | null>(null)
    

    React.useEffect(() => {
        const cartItems: any = localStorage.getItem("netFarmaCartItems")
        const cProducts: CartProductType[] | null = JSON.parse(cartItems)
        const netFarmaPaymentIntent: any = localStorage.getItem("netFarmaPaymentIntent")
        const paymentIntent: string | any = JSON.parse(netFarmaPaymentIntent)


        setCartProducts(cProducts)
        setPaymentIntent(paymentIntent)
    }, [])

    const handleAddProductToCart = useCallback((product: CartProductType) => {
        setCartProducts((prev) => {
            let updatedCart;
            if (prev) {
                updatedCart = [...prev, product]
            } else {
                updatedCart = [product]
            }
            console.log("Produtos adicionados ", updatedCart)
            //Por um toast de Sucesso
            console.log('Product Added to cart')
            localStorage.setItem("netFarmaCartItems", JSON.stringify(updatedCart))
            localStorage.setItem("netFarmaCartItemsOrder", JSON.stringify(updatedCart))
            return updatedCart
        })
    }, [])


    const values = {
        handleAddProductToCart,
        cartProducts,
        paymentIntent
    }
    return (
        <CartContext.Provider value={{ handleAddProductToCart, cartProducts,paymentIntent }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart deve ser usado dentro de um CartProvider');
    }
    return context;
}