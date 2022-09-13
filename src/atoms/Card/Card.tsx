import React from 'react'
import styled from 'styled-components'
import { DsColorGraySnow, DsBorderRadius, DsBorderWidth } from '@tokens/tokens'

export interface Props {
  id?: string
  className?: string
}

const Box = styled.div`
  box-shadow: ${DsBorderWidth} ${DsBorderWidth} 4px 0 rgba(0, 0, 0, 0.12);
  background: ${DsColorGraySnow};
  transition: 0.3s;
  border-radius: ${DsBorderRadius};
  overflow: hidden;
`

const Card: React.FC<Props> = ({ children, id, className }) => (
  <Box id={id} className={className} data-testid={id}>
    {children}
  </Box>
)

export default Card
