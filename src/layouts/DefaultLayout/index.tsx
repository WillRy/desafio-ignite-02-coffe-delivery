import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer, SpaceContainer } from './styles'

export function DefaultLayout() {
  return (
    <SpaceContainer>
      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
    </SpaceContainer>
  )
}
