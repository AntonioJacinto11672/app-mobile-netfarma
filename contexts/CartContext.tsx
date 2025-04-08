import { CartProductType } from '@/utils/cartType';
import React, { createContext, useCallback, useContext, useState } from 'react';

interface CartContextType {
    handleAddProductToCart: (product: CartProductType) => void;
    cartProducts: CartProductType[] | null;
    paymentIntent: string | null,
    cartTotalAmount: number;
    handleClearCart: () => void,

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

    React.useEffect(() => { 
        const getTotal = () => {
            if (cartProducts) {

                const { total, qty } = cartProducts?.reduce((acc, item) => {
                    const itemTotal = item.price * item.quantity

                    acc.total += itemTotal
                    acc.qty += item.quantity

                    return acc
                }, { total: 0, qty: 0 })
                setCartTotalQty(qty)
                setCartTotalAmount(total)
            }
        }

        getTotal()
    }
        ,[cartProducts])

    const handleClearCart = useCallback(() => {
        setCartProducts(null)
        setCartTotalQty(0)
        localStorage.setItem("netFarmaCartItems", JSON.stringify(null))


    }, [cartProducts])

    const values = {
        handleAddProductToCart,
        cartProducts,
        paymentIntent,
        cartTotalAmount,
        handleClearCart
    }
    return (
        <CartContext.Provider value={{ handleAddProductToCart, cartProducts, paymentIntent, cartTotalAmount, handleClearCart }}>
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