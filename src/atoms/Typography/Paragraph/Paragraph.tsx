import React from 'react'
import styled from 'styled-components'
import {
  color,
  typography,
  TypographyProps,
  ColorProps,
  space,
  SpaceProps
} from 'styled-system'
import { ParagraphStyles } from './Paragraph.styles'

interface Props {
  children: React.ReactNode | React.ReactElement
}

const ParagraphContent = styled.p<TypographyProps & ColorProps & SpaceProps>`
  ${ParagraphStyles}
  ${typography}
  ${color}
  ${space}
`

const Paragraph: React.FC<Props> = ({ ...otherProps }) => {
  return <ParagraphContent {...otherProps} />
}

export default Paragraph
