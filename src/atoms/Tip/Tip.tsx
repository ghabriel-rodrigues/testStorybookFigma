import React from 'react'
import styled from 'styled-components'
import Icon from '@atoms/Icon/Icon'
import { IconType } from '@atoms/Icon/enums'
import { TipTypes } from './Tip.types'
import { TipBaseCSS, TipTypesCSS } from './Tip.styles'

export interface TipProps {
  children: React.ReactNode | React.ReactElement
  type?: TipTypes | string
}

export interface TipBaseProps {
  type: TipTypes | string
}

const TipBase = styled.div<TipBaseProps>`
  ${TipBaseCSS}
  ${TipTypesCSS}
`

const TipIcons: { [name: string]: IconType } = {
  hint: IconType.Hint,
  info: IconType.CheckCircle,
  warning: IconType.Warning,
  danger: IconType.Error
}

const Tip: React.FC<TipProps> = ({
  children,
  type = TipTypes.normal,
  ...props
}) => {
  return (
    <TipBase type={type} role="alert" {...props}>
      {type != TipTypes.normal && (
        <Icon type={TipIcons[type]} aria-hidden="true" />
      )}
      {children}
    </TipBase>
  )
}

export default Tip
