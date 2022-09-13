import React from 'react'
import { IconType } from '@atoms/Icon/enums'
import { BoxCSS, ButtonCSS, IconCSS, TextCSS } from './Chip.styles'
import DSIcon from '@atoms/Icon/Icon'
import { space } from 'styled-system'
import styled from 'styled-components'

const Box = styled.div`
  ${BoxCSS}
  ${space}
`

const TextButton = styled.button`
  ${TextCSS}
`

const IconButton = styled.button`
  ${ButtonCSS}
`

const Icon = styled(DSIcon)`
  ${IconCSS}
`

export interface ChipProps {
  closeLabel?: string
  onClick?: () => void
  onClose?: () => void
}

const Chip: React.FC<ChipProps> = ({
  onClick,
  onClose,
  closeLabel,
  children,
  ...props
}) => (
  <Box {...props}>
    <TextButton onClick={onClick}>{children}</TextButton>
    {onClose && (
      <IconButton aria-label={closeLabel} onClick={onClose}>
        <Icon type={IconType.Close} />
      </IconButton>
    )}
  </Box>
)

export default Chip
