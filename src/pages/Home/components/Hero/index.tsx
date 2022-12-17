import {
  HeroBackground,
  HeroContainer,
  ImageContainer,
  InfoContainer,
  InfoIcon,
  InfoItem,
} from './styles'
import heroImage from '../../../../assets/hero.svg'
import { ShoppingCart } from 'phosphor-react'
import { Container } from '../../../../components/Container'
import { RoundIcon } from '../../../../components/RoundIcon'
export function Hero() {
  return (
    <HeroBackground>
      <Container>
        <HeroContainer>
          <InfoContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>
            <div>
              <InfoItem>
                <RoundIcon variantColor="yellowDark">
                  <ShoppingCart size={16} weight="fill" />
                </RoundIcon>
                Compra simples e segura
              </InfoItem>
              <InfoItem>
                <RoundIcon variantColor="gray">
                  <ShoppingCart size={16} weight="fill" />
                </RoundIcon>
                Embalagem mantém o café intacto
              </InfoItem>
              <InfoItem>
                <RoundIcon variantColor="yellow">
                  <ShoppingCart size={16} weight="fill" />
                </RoundIcon>
                Entrega rápida e rastreada
              </InfoItem>
              <InfoItem>
                <RoundIcon variantColor="purple">
                  <ShoppingCart size={16} weight="fill" />
                </RoundIcon>
                O café chega fresquinho até você
              </InfoItem>
            </div>
          </InfoContainer>
          <ImageContainer>
            <img src={heroImage} alt="Coffe Delivery" />
          </ImageContainer>
        </HeroContainer>
      </Container>
    </HeroBackground>
  )
}
