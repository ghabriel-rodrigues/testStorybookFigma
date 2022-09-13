import React from 'react'
import styled from 'styled-components'
import { IconType } from '@/atoms/Icon/enums'
import Icon from '@/atoms/Icon/Icon'

import { SpanBaseCSS, variants } from './InputHelperMessage.styles'

interface InputHelperMessageProps {
  children: React.ReactNode | React.ReactElement
  id: string
  hasError?: boolean
  iconType?: IconType
}

interface WrapperProps {
  type: string
}

const SpanBase = styled.span<InputHelperMessageProps>`
  ${SpanBaseCSS}
`

export const IconWrapper = styled.div<WrapperProps>`
  ${variants}
`

const InputHelperMessage: React.FC<InputHelperMessageProps> = ({
  children = '',
  id,
  hasError = false,
  iconType,
  ...props
}) => {
  return (
    <SpanBase {...props} id={id} role={hasError ? 'alert' : undefined}>
      <IconWrapper type={hasError ? 'error' : iconType ? 'regular' : 'empty'}>
        {hasError ? (
          <Icon type={IconType.Error} />
        ) : (
          iconType && <Icon type={iconType} />
        )}
      </IconWrapper>
      {children}
    </SpanBase>
  )
}

export default InputHelperMessage
