import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
import { useSearchField } from '@react-aria/searchfield'
import { useSearchFieldState } from '@react-stately/searchfield'

import Input from '@atoms/Input/Input'
import { IconType } from '@atoms/Icon/enums'
import { DsBorderRadius } from '@tokens/tokens'

import {
  Wrapper,
  SearchButton,
  ButtonSizes,
  InputSizes,
  InputFullWidth
} from './components/InputSearchComponents'
import { SIZES } from './components/types'

interface StyledInputProps {
  componentSize?: string
}

interface SearchInputProps {
  id: string
  name: string
  label: string
  value?: string
  placeholder: string
  size?: 'md' | 'lg'
  fullWidth?: boolean
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>
}

const StyledInput = styled(Input)<StyledInputProps>`
  border-radius: ${DsBorderRadius} 0px 0px ${DsBorderRadius};
  ${InputSizes}
  ${InputFullWidth}
`

const ButtonWithIcon = styled(SearchButton)`
  ${ButtonSizes}
`

const InputSearch: React.FC<SearchInputProps> = ({
  id,
  size = SIZES.md,
  buttonProps,
  ...props
}) => {
  const state = useSearchFieldState(props)
  const ref = React.useRef<HTMLInputElement>(null)
  const { inputProps } = useSearchField(props, state, ref)

  const inputPropsWithAccessibility = {
    ...props,
    ...inputProps
  }

  return (
    <Wrapper role="searchbox" aria-label={props.label}>
      <StyledInput
        {...inputPropsWithAccessibility}
        id={id}
        ref={ref}
        componentSize={size}
      />
      <ButtonWithIcon
        {...buttonProps}
        id={`${id}-button`}
        size={size}
        variant="outlined"
        iconType={IconType.Search}
        aria-labelledby={id}
      />
    </Wrapper>
  )
}

export default InputSearch
