import { CartProductType } from '@/utils/cartType';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

interface CartContextType {
    cartTotalQty: number;
    cartTotalAmount: number;
    cartProducts: CartProductType[] | null;
    handleAddProductToCart: (product: CartProductType) => void;
    handleRemoveProductFromCart: (product: CartProductType) => void;
    handleCartQtyIncrease: (product: CartProductType) => void;
    handleCartQtyDecrease: (product: CartProductType) => void;
    handleClearCart: () => void,
    paymentIntent: string | null,
    handleSetPaymentIntent: (val: string | null) => void

}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
    /* Var */
    const [cartTotalQty, setCartTotalQty] = useState(0)
    const [cartTotalAmount, setCartTotalAmount] = useState(0)
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null)
    const [paymentIntent, setPaymentIntent] = useState<string | null>(null)


    useEffect(() => {
        const cartItems: any = localStorage.getItem("netFarmaCartItems")
        const cProducts: CartProductType[] | null = JSON.parse(cartItems)
        const netFarmaPaymentIntent: any = localStorage.getItem("netFarmaPaymentIntent")
        const paymentIntent: string | any = JSON.parse(netFarmaPaymentIntent)


        setCartProducts(cProducts)
        setPaymentIntent(paymentIntent)
    }, [])

    useEffect(() => {
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
        , [cartProducts])

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

    const handleRemoveProductFromCart = useCallback((product: CartProductType) => {
        if (cartProducts) {
            const filteredProducts = cartProducts.filter((item) => {
                return item.id !== product.id
            })
            //Por um toast de sucesso
            console.log('Produto removido')
            localStorage.setItem("netFarmaCartItems", JSON.stringify(filteredProducts))
            setCartProducts(filteredProducts)
        }
    }, [cartProducts])


    const handleCartQtyIncrease = useCallback((product: CartProductType) => {
        let updatedCart;


        if (product.quantity === 99) {
            //Por um toast de error
            return console.error("Ops! Máximo alcançado")
        }

        if (cartProducts) {
            updatedCart = [...cartProducts]

            const exintingIndex = cartProducts.findIndex((item) => item.id === product.id)
            if (exintingIndex > -1) {
                updatedCart[exintingIndex].quantity = ++updatedCart[exintingIndex].quantity
            }

            setCartProducts(updatedCart)
            localStorage.setItem("netFarmaCartItems", JSON.stringify(updatedCart))
        }
    }, [cartProducts])

    const handleCartQtyDecrease = useCallback((product: CartProductType) => {
        let updatedCart;
        console.log("Antigiu o Limit")

        if (product.quantity === 1) {
            //Por um toast de error
            return console.error("Ops! Mínimo alcançado")
        }

        if (cartProducts) {
            updatedCart = [...cartProducts]

            const exintingIndex = cartProducts.findIndex((item) => item.id === product.id)
            if (exintingIndex > -1) {
                updatedCart[exintingIndex].quantity = --updatedCart[exintingIndex].quantity
            }

            setCartProducts(updatedCart)
            localStorage.setItem("netFarmaCartItems", JSON.stringify(updatedCart))
        }
    }, [cartProducts])

    const handleClearCart = useCallback(() => {
        setCartProducts(null)
        setCartTotalQty(0)
        localStorage.setItem("netFarmaCartItems", JSON.stringify(null))


    }, [cartProducts])

    const handleSetPaymentIntent = useCallback((val: string | null) => {
        setPaymentIntent(val)
        localStorage.setItem("netFarmaPaymentIntent", JSON.stringify(val))
    }, [paymentIntent])
    const value = {
        cartTotalQty,
        cartTotalAmount,
        cartProducts,
        handleAddProductToCart,
        handleRemoveProductFromCart,
        handleCartQtyIncrease,
        handleCartQtyDecrease,
        handleClearCart,
        paymentIntent,
        handleSetPaymentIntent
    } 
    return (
        <CartContext.Provider value={value}>
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