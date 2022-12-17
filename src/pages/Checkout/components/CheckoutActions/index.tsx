import { useContext } from 'react'
import { ProductCart } from '../../../../@types/global'
import { CartContext } from '../../../../context/CartContext'
import { CheckoutProductCart } from '../CheckoutProductCart'
import { BoxContent, ButtonFinishCheckout, Subtitle } from './styles'

export function CheckoutActions() {
  const { cart, totalInCart, deliveryPrice, totalWithDelivery } =
    useContext(CartContext)

  return (
    <div>
      <Subtitle>Cafés selecionados</Subtitle>
      <BoxContent>
        {cart.map((product: ProductCart) => {
          return (
            <CheckoutProductCart
              key={product.id}
              product={product}
            ></CheckoutProductCart>
          )
        })}

        <ul>
          <li>
            <span>Total de itens</span> <span>R$ {totalInCart.toFixed(2)}</span>
          </li>
          <li>
            <span>Entrega</span> <span>R$ {deliveryPrice.toFixed(2)}</span>
          </li>
          <li>
            <span>Total</span> <span>R$ {totalWithDelivery.toFixed(2)}</span>
          </li>
        </ul>

        <ButtonFinishCheckout>confirmar pedido</ButtonFinishCheckout>
      </BoxContent>
    </div>
  )
}
