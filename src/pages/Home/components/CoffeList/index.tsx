import { useContext } from 'react'
import { Container } from '../../../../components/Container'
import { ProductsContext } from '../../../../context/ProductsContext'
import { ProductCard } from '../ProductCard'
import { ProductList, TitleList } from './styles'

export function CoffeList() {
  const { products } = useContext(ProductsContext)

  return (
    <Container>
      <TitleList>Nossos cafés</TitleList>
      <ProductList>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </ProductList>
    </Container>
  )
}
