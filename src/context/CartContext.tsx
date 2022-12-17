import { createContext, ReactNode, useContext, useState } from 'react'
import { Address, PaymentType, Product, ProductCart } from '../@types/global'
import { ProductsContext } from './ProductsContext'

interface CartContextType {
  cart: ProductCart[]
  address?: Address
  paymentType?: PaymentType | null
  qtdInCart: number
  totalInCart: number
  deliveryPrice: number
  totalWithDelivery: number
  handleCartChange: (productId: string, quantity: number) => void
  handleCartRemove: (productId: string) => void
  changePaymentType: (type: PaymentType) => void
  finishCheckout: (data: Address, paymentType: PaymentType) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}
export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<ProductCart[]>([])
  const [paymentType, setPaymentType] = useState<PaymentType | null>(null)
  const [address, setAdddress] = useState<Address | undefined>(undefined)
  const { products } = useContext(ProductsContext)

  function handleCartChange(productId: string, quantity: number) {
    const productIndex = cart.findIndex((p: ProductCart) => p.id === productId)
    const product = products.find((p: Product) => p.id === productId)

    const newProducts: ProductCart[] = [...cart]

    if (!product) return

    if (productIndex >= 0) {
      newProducts[productIndex] = { ...product, quantity }
    } else {
      newProducts.push({ ...product, quantity })
    }

    setCart(newProducts)
  }

  function handleCartRemove(productId: string) {
    const products = cart.filter((p: ProductCart) => p.id !== productId)
    setCart(products)
  }

  function changePaymentType(type: PaymentType) {
    setPaymentType(type)
  }

  function finishCheckout(data: Address, paymentType: PaymentType) {
    setAdddress(data)
    setPaymentType(paymentType)
    setCart([])
  }

  const qtdInCart = cart.reduce((prev, next) => {
    return next.quantity + prev
  }, 0)

  const totalInCart = cart.reduce((prev, next) => {
    return next.price * next.quantity + prev
  }, 0)

  const deliveryPrice = 3.5

  const totalWithDelivery = totalInCart ? totalInCart - deliveryPrice : 0

  return (
    <CartContext.Provider
      value={{
        cart,
        handleCartChange,
        handleCartRemove,
        qtdInCart,
        paymentType,
        changePaymentType,
        totalInCart,
        deliveryPrice,
        totalWithDelivery,
        finishCheckout,
        address,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
