import { LayoutContainer, SpaceContainer } from './styles'
import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  hasSpaceTop?: boolean
}
export function Container({ children, hasSpaceTop = false }: ContainerProps) {
  return (
    <SpaceContainer hasSpaceTop={hasSpaceTop}>
      <LayoutContainer>{children}</LayoutContainer>
    </SpaceContainer>
  )
}
