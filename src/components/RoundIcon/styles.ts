import styled from 'styled-components'

export const VARIANT_COLOR = {
  yellowDark: 'yellow-700',
  yellow: 'yellow-500',
  purple: 'purple-500',
  gray: 'text',
} as const

export interface InfoIconProps {
  variantColor: keyof typeof VARIANT_COLOR
  size: number
}
export const InfoIcon = styled.div<InfoIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;

  background: ${(props) => props.theme[VARIANT_COLOR[props.variantColor]]};

  svg {
    fill: ${(props) => props.theme.white};
  }
`
