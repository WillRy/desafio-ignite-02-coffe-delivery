import { LayoutContainer, SpaceContainer } from './styles'
import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}
export function Container({ children }: ContainerProps) {
  return (
    <SpaceContainer>
      <LayoutContainer>{children}</LayoutContainer>
    </SpaceContainer>
  )
}
