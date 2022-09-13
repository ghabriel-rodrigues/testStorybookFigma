import { InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import {
  DsBorderRadius,
  DsBorderWidth,
  DsColorGraySmokeExtraLight,
  DsColorGraySnow,
  DsColorGraySpaceGray,
  DsFontSizeLg
} from '@/tokens/tokens'
import { Focus, Disabled, Invalid } from './Modifiers'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

//@TODO: Realocar CSS para arquivo .styles utilizando styled-system.
const Input = styled.input<InputProps>`
  appearance: none;
  width: initial;
  border-radius: ${DsBorderRadius};
  padding: 10px;
  box-sizing: border-box;
  border: ${DsBorderWidth} solid ${DsColorGraySmokeExtraLight};
  background: ${DsColorGraySnow};
  color: ${DsColorGraySpaceGray};
  line-height: 18px;
  font-size: ${DsFontSizeLg};

  ::-webkit-input-placeholder {
    color: ${DsColorGraySpaceGray};
  }

  :-ms-input-placeholder {
    opacity: 1;
    color: ${DsColorGraySpaceGray};
  }

  ::placeholder {
    color: ${DsColorGraySpaceGray};
  }

  &:focus {
    ${Focus}
  }

  &:disabled {
    ${Disabled}
  }

  &:invalid {
    ${Invalid}
  }

  ${({ hasError }) =>
    hasError &&
    css`
      ${Invalid}
    `}
`

export default Input
