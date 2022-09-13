import React from 'react'
import { IconType } from './enums'
import { ICON_MAP } from './icon-map'
import styled from 'styled-components'
import { IconWrapperCSS } from '@atoms/Icon/Icon.styles'

interface IconProps {
  type: IconType
  testid?: string
}

export const IconWrapper = styled.div`
  ${IconWrapperCSS}
`

const Icon: React.FC<IconProps> = ({ type, testid, ...props }) => {
  const IconComponent = ICON_MAP[type]
  if (IconComponent) {
    return (
      <IconWrapper>
        <IconComponent data-testid={testid} {...props} />
      </IconWrapper>
    )
  }
  return <span>Icon not found</span>
}

export default Icon
