import React from 'react'
import styled, { css } from 'styled-components'

export const BoxContent = styled.div`
  background: ${(props) => props.theme.card};
  border-radius: 6px;
  padding: 40px;
  margin-bottom: 12px;
`

export const BoxTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 8px;

  font-weight: 400;
  font-size: 16px;
  line-height: 130%;

  display: flex;
  align-items: center;

  color: ${(props) => props.theme.subtitle};

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  margin-bottom: 2px;
`

export const BoxSubTitle = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  color: ${(props) => props.theme.text};

  margin-bottom: 32px;
  padding-left: 30px;
`

export const TypeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  align-items: center;
  gap: 12px;
`

interface TypeButtonProps extends React.HTMLAttributes<HTMLInputElement> {
  active?: boolean
}
export const TypeButton = styled.button<TypeButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 12px;
  height: 51px;
  white-space: nowrap;
  font-size: 12px;

  border-radius: 6px;

  border: none;
  cursor: pointer;

  background: ${(props) => props.theme.button};
  border: 1px solid ${(props) => props.theme.button};

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  &:hover {
    background: ${(props) => props.theme.hover};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme['purple-700']};
    box-shadow: 0 0 0 1px ${(props) => props.theme['purple-700']};
  }

  ${(props) =>
    props.active &&
    css`
      background: ${(props) => props.theme['purple-100']};
      border: 1px solid ${(props) => props.theme['purple-500']};
    `}
`
