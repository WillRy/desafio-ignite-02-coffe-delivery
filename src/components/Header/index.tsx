import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  ActionContainer,
  ButtonLocale,
  HeaderContainer,
  LinkCart,
} from './styles'
import { Container } from '../Container'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export function Header() {
  const { qtdInCart } = useContext(CartContext)
  return (
    <Container>
      <HeaderContainer>
        <Link to="/">
          <img src={logo} alt="Coffe Delivery" />
        </Link>
        <ActionContainer>
          <ButtonLocale>
            <MapPin size={22} weight="fill" />
            Porto Alegre
          </ButtonLocale>

          <LinkCart to="/checkout">
            <ShoppingCart size={22} weight="fill" />
            {qtdInCart > 0 && <span>{qtdInCart}</span>}
          </LinkCart>
        </ActionContainer>
      </HeaderContainer>
    </Container>
  )
}
