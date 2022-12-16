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
                <InfoIcon variantColor="yellowDark">
                  <ShoppingCart size={16} weight="fill" />
                </InfoIcon>
                Compra simples e segura
              </InfoItem>
              <InfoItem>
                <InfoIcon variantColor="gray">
                  <ShoppingCart size={16} weight="fill" />
                </InfoIcon>
                Embalagem mantém o café intacto
              </InfoItem>
              <InfoItem>
                <InfoIcon variantColor="yellow">
                  <ShoppingCart size={16} weight="fill" />
                </InfoIcon>
                Entrega rápida e rastreada
              </InfoItem>
              <InfoItem>
                <InfoIcon variantColor="purple">
                  <ShoppingCart size={16} weight="fill" />
                </InfoIcon>
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
