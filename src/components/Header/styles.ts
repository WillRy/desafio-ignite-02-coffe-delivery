import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 32px 0;

  height: 104px;

  position: sticky;
  top: 0;
  width: 100%;

  background: ${(props) => props.theme.background};

  img {
    display: block;
    height: 40px;
  }
`

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`

export const ButtonLocale = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  width: 143px;
  height: 38px;

  background: ${(props) => props.theme['purple-100']};
  border-radius: 6px;

  border: none;
  color: ${(props) => props.theme['purple-700']};

  font-size: 14px;

  svg {
    fill: ${(props) => props.theme['purple-700']};
  }
`

export const LinkCart = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  width: 38px;
  height: 38px;

  background: ${(props) => props.theme['yellow-100']};
  border-radius: 6px;

  border: none;
  cursor: pointer;
  position: relative;

  span {
    position: absolute;
    right: -8.35px;
    top: -8px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    width: 20px;
    height: 20px;

    background: ${(props) => props.theme['yellow-700']};
    color: ${(props) => props.theme.white};
  }

  svg {
    fill: ${(props) => props.theme['yellow-700']};
  }
`
