import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  ActionContainer,
  ButtonLocale,
  HeaderContainer,
  LinkCart,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="Coffe Delivery" />
      </Link>
      <ActionContainer>
        <ButtonLocale>
          <MapPin size={22} weight="fill" />
          Porto Alegre
        </ButtonLocale>

        <LinkCart to="/">
          <ShoppingCart size={22} weight="fill" />
          <span>3</span>
        </LinkCart>
      </ActionContainer>
    </HeaderContainer>
  )
}
