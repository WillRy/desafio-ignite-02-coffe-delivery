import styled, { css } from 'styled-components'

export const InputContainer = styled.div`
  position: relative;

  span {
    color: red;
  }
`

interface InputProps {
  altPlaceholder?: string
}
export const Input = styled.input<InputProps>`
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 4px;

  width: 100%;
  height: 42px;

  background: ${(props) => props.theme.input};
  /* Brand/Yellow Dark */

  border: 1px solid ${(props) => props.theme.button};
  border-radius: 4px;

  &:focus {
    box-shadow: none;
    border: 1px solid ${(props) => props.theme['yellow-700']};
  }

  ${(props) =>
    props.altPlaceholder &&
    css`
      padding-right: 80px;
    `}
`

export const InputWrapper = styled.div`
  position: relative;
`

export const InputOptionalPlaceholder = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(0%, -50%);
  font-style: italic;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;

  color: ${(props) => props.theme.label};
`
