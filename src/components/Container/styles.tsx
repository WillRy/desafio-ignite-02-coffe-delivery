import styled, { css } from 'styled-components'

interface SpaceContainerProps {
  hasSpaceTop: boolean
}
export const SpaceContainer = styled.div<SpaceContainerProps>`
  padding: 0px 16px;

  ${(props) =>
    props.hasSpaceTop &&
    css`
      padding-top: 40px;
    `}
`
export const LayoutContainer = styled.div`
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  max-width: 1120px;
`
