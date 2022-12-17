import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../context/CartContext'
import { Card, CardButton, CardInfo, CardInput, CardPrice } from './styles'
import { toast } from 'react-toastify'
import { Product } from '../../../../@types/global'

interface ProductCardProps {
  product: Product
}
export function ProductCard({ product }: ProductCardProps) {
  const { cart, handleCartChange } = useContext(CartContext)
  const [quantity, setQuantity] = useState(() => {
    const productInCart = cart.find((p: Product) => p.id === product.id)
    return productInCart ? productInCart.quantity || 1 : 1
  })

  //

  function handleAddQuantity() {
    setQuantity((qtd) => quantity + 1)
  }

  function handleSubQuantity() {
    if (quantity <= 1) return
    setQuantity((qtd) => quantity - 1)
  }

  function handleAddToCart() {
    toast('Carrinho atualizado!', { type: 'success' })
    handleCartChange(product.id, quantity)
  }

  return (
    <Card>
      <img src={product.thumb} alt={product.name} />
      <ul>
        {product.categories.map((category) => {
          return <li key={category}>{category}</li>
        })}
      </ul>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <CardInfo>
        <CardPrice>
          R$&nbsp;<span>{product.price}</span>
        </CardPrice>
        <CardInput>
          <Minus size={22} weight="fill" onClick={handleSubQuantity} />
          {quantity}
          <Plus size={22} weight="fill" onClick={handleAddQuantity} />
        </CardInput>
        <CardButton onClick={handleAddToCart}>
          <ShoppingCart size={22} weight="fill" />
        </CardButton>
      </CardInfo>
    </Card>
  )
}
