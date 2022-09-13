import React from 'react'
import styled from 'styled-components'
import { LegendBaseCSS } from './Legend.styles'
import { LegendProps } from './Legend.types'

const LegendBase = styled.legend`
  ${LegendBaseCSS};
`

const Legend: React.FC<LegendProps> = ({ children, ...props }) => {
  return <LegendBase {...props}>{children}</LegendBase>
}

export default Legend
