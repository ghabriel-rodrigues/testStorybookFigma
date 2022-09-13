import React from 'react'
import styled from 'styled-components'
import { FieldSetBaseCSS } from './FieldSet.styles'
import { FieldSetProps } from './FieldSet.types'

const FieldSetBase = styled.fieldset`
  ${FieldSetBaseCSS};
`

const FieldSet: React.FC<FieldSetProps> = ({ children, ...props }) => {
  return <FieldSetBase {...props}>{children}</FieldSetBase>
}

export default FieldSet
