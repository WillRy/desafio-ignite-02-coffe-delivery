import { ReactNode } from 'react'
import { InfoIcon, VARIANT_COLOR } from './styles'

interface InfoIconProps {
  variantColor: keyof typeof VARIANT_COLOR
  children: ReactNode
  size?: number
}
export function RoundIcon({
  variantColor,
  size = 32,
  children,
}: InfoIconProps) {
  return (
    <InfoIcon variantColor={variantColor} size={size}>
      {children}
    </InfoIcon>
  )
}
