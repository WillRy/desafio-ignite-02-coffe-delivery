import React, { forwardRef } from 'react'
import {
  Input,
  InputContainer,
  InputOptionalPlaceholder,
  InputWrapper,
} from './styles'

interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  label?: string
  error?: string | undefined
  altPlaceholder?: string
}
const forward = forwardRef<HTMLInputElement, BaseInputProps>(
  ({ id, label, error, altPlaceholder, ...props }: BaseInputProps, ref) => {
    return (
      <InputContainer>
        {label && <label htmlFor={id}>{label}</label>}
        <InputWrapper>
          <Input {...props} ref={ref} id={id} altPlaceholder={altPlaceholder} />
          {altPlaceholder && (
            <InputOptionalPlaceholder>
              {altPlaceholder}
            </InputOptionalPlaceholder>
          )}
        </InputWrapper>

        {error && <span>{error}</span>}
      </InputContainer>
    )
  },
)

forward.displayName = 'BaseInput'

export const BaseInput = forward
