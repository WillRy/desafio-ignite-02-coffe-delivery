import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { ProductCart } from '../../../../@types/global'
import { CartContext } from '../../../../context/CartContext'
import { Card, CardInput, RemoveCartButton } from './styles'

interface CheckoutProductCartProps {
  product: ProductCart
}
export function CheckoutProductCart({ product }: CheckoutProductCartProps) {
  const { handleCartChange, handleCartRemove } = useContext(CartContext)

  function handleAddQuantity() {
    handleCartChange(product.id, product.quantity + 1)
  }

  function handleSubQuantity() {
    if (product.quantity <= 1) {
      return
    }

    handleCartChange(product.id, product.quantity - 1)
  }

  return (
    <Card>
      <div className="thumb">
        <img src={product.thumb} alt={product.name} />
      </div>
      <div className="info">
        <h2 className="name">{product.name}</h2>
        <div>
          <CardInput>
            <Minus size={22} weight="fill" onClick={handleSubQuantity} />
            {product.quantity}
            <Plus size={22} weight="fill" onClick={handleAddQuantity} />
          </CardInput>
          <RemoveCartButton onClick={() => handleCartRemove(product.id)}>
            <Trash size={22} />
            Remover
          </RemoveCartButton>
        </div>
      </div>
      <span className="price">R$ {product.price.toFixed(2)}</span>
    </Card>
  )
}
