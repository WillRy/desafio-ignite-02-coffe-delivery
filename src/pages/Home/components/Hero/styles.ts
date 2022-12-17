import styled from 'styled-components'
import image from '../,,/../../../../assets/homeBackground.svg'

export const HeroContainer = styled.section`
  padding: 92px 0px;

  display: grid;
  grid-template-columns: minmax(420px, 1fr) auto;

  @media screen and (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr;
  }

  gap: 56px;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
    color: ${(props) => props.theme.title};
    margin-bottom: 16px;
  }

  h2 {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme.subtitle};
    margin-bottom: 66px;
  }
`

export const HeroBackground = styled.section`
  background: url(${image});
  background-size: cover;
  margin-bottom: 32px;
`

export const InfoContainer = styled.div`
  flex: 1 1 400px;

  > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, auto));
    gap: 20px 40px;
  }
`

export const ImageContainer = styled.div`
  flex: 1 0 260px;

  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }
`

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;

  color: ${(props) => props.theme.text};
`

const VARIANT_COLOR = {
  yellowDark: 'yellow-700',
  yellow: 'yellow-500',
  purple: 'purple-500',
  gray: 'text',
} as const

interface InfoIconProps {
  variantColor: keyof typeof VARIANT_COLOR
}
export const InfoIcon = styled.div<InfoIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 32px;
  height: 32px;

  border-radius: 50%;

  background: ${(props) => props.theme[VARIANT_COLOR[props.variantColor]]};

  svg {
    fill: ${(props) => props.theme.white};
  }
`
