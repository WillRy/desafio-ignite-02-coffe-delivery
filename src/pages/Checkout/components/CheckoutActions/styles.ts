import styled from 'styled-components'

export const Subtitle = styled.h2`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 130%;
  color: ${(props) => props.theme.subtitle};
  margin-bottom: 16px;
`

export const BoxContent = styled.div`
  padding: 40px;

  /* Base/Card */

  background: ${(props) => props.theme.card};
  border-radius: 6px 44px;

  ul {
    width: 100%;
    padding: none;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 24px;

    li {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;

      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      color: ${(props) => props.theme.text};

      span:last-of-type {
        font-size: 16px;
      }
    }

    li:last-of-type {
      font-weight: 700;
      font-size: 20px;
      color: ${(props) => props.theme.subtitle};

      span:last-of-type {
        font-size: 20px;
      }
    }
  }
`

export const ProductInCart = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  .thumb {
    width: 64px;
    height: 64px;
    margin-right: 20px;
  }

  .product {
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;

    display: flex;
    align-items: center;

    color: ${(props) => props.theme.subtitle};

    margin-bottom: 8px;
  }

  .actions {
    display: flex;
    gap: 8px;
  }
`

export const ButtonFinishCheckout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  gap: 4px;

  /* Brand/Yellow */

  background: ${(props) => props.theme['yellow-500']};
  color: #fff;
  border-radius: 6px;

  border: none;
  width: 100%;

  /* Components/Button G */

  font-weight: 700;
  font-size: 14px;
  line-height: 160%;

  text-transform: uppercase;
  cursor: pointer;

  /* Base/White */

  color: ${(props) => props.theme.white};

  &:hover {
    background: ${(props) => props.theme['yellow-700']};
  }
`
