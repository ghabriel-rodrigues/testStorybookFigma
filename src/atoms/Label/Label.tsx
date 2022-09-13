import React from 'react'
import styled, { css } from 'styled-components'

import { DsColorGraySpaceGray, DsFontSizeBase } from '@tokens/tokens'
import Invalid from './Modifiers'

interface Props {
  children: React.ReactNode | React.ReactElement
  htmlFor?: string
  hasError?: boolean
}
/* TODO
  - Add disabled behavior and styles
  - Add required behavior (generate * content)
  - Add warning behavior and styles
*/

const LabelBase = styled.label<Props>`
  font-size: ${DsFontSizeBase};
  line-height: 17px;
  color: ${DsColorGraySpaceGray};

  &:invalid {
    ${Invalid}
  }
  ${({ hasError }) =>
    hasError &&
    css`
      ${Invalid}
    `}
`

const Label: React.FC<Props> = ({
  children = '',
  htmlFor,
  hasError = false,
  ...props
}) => {
  return (
    <LabelBase {...props} hasError={hasError} htmlFor={htmlFor}>
      {children}
    </LabelBase>
  )
}

export default Label
