import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;

  position: relative;

  & ~ &::before,
  &:last-of-type::after {
    content: ' ';
    border-top: 1px solid #e6e5e5;
    height: 1px;
    margin: 24px 0;
    display: flex;
    width: 100%;
  }

  .thumb {
    width: 64px;
    height: 64px;
    margin-right: 20px;

    img {
      height: auto;
      max-width: 100%;
    }
  }

  .name {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    display: flex;
    align-items: center;

    color: ${(props) => props.theme.subtitle};
    margin-bottom: 8px;
  }

  .info {
    > div {
      display: flex;
      gap: 8px;
    }
  }

  & ~ & .price {
    top: 50px;
  }

  .price {
    /* Text/Bold M */

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;
    /* identical to box height, or 21px */

    /* Base/Text */

    color: ${(props) => props.theme.text};
    margin-left: auto;

    top: 0px;
    right: -4px;
    position: absolute;
  }
`

export const CardInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  width: 72px;
  height: 32px;

  background: ${(props) => props.theme.button};
  border-radius: 6px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
  /* identical to box height, or 21px */

  text-align: center;
  user-select: none;

  /* Base/Base/Title */

  color: ${(props) => props.theme.title};

  svg {
    cursor: pointer;
    fill: ${(props) => props.theme['purple-500']};

    &:hover {
      fill: ${(props) => props.theme['purple-700']};
    }
  }
`

export const RemoveCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  gap: 4px;

  height: 32px;

  /* Base/Button */

  background: ${(props) => props.theme.button};
  border-radius: 6px;
  border: none;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;

  text-transform: uppercase;

  /* Base/Text */

  color: ${(props) => props.theme.text};
  cursor: pointer;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  &:hover {
    background: ${(props) => props.theme.hover};
  }
`
