import { Outlet } from 'react-router-dom'
import { LayoutContainer, SpaceContainer } from './styles'

export function DefaultLayout() {
  return (
    <SpaceContainer>
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </SpaceContainer>
  )
}
