import styled from 'styled-components'

export const TitleList = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;
  margin-bottom: 54px;

  color: ${(props) => props.theme.subtitle};
`

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 256px));
  gap: 40px 32px;
  margin-bottom: 160px;
  justify-content: center;
`

export const ProductCard = styled.div`
  position: relative;

  > img {
    margin-top: -20px;
  }
`
