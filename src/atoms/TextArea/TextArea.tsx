import { InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import {
  TextAreaBaseCSS,
  TextAreaInvalid,
  TextAreaResize
} from './TextArea.styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
  resize?: boolean
}

const TextArea = styled.textarea<Props>`
  ${TextAreaBaseCSS}
  ${({ hasError }) =>
    hasError &&
    css`
      ${TextAreaInvalid}
    `}
    ${({ resize }) =>
    resize &&
    css`
      ${TextAreaResize}
    `}
`

export default TextArea
