import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
import type * as Polymorphic from '@radix-ui/react-polymorphic'

import { IconPositions } from '@atoms/Icon/components/types/Types'
import { IconType } from '@atoms/Icon/enums'
import { Sizes, Types } from './components/constants/Types'
import Icon from '@atoms/Icon/Icon'
import sizes from './components/variants/Sizes'
import variants, {
  IconLeftCSS,
  IconRightCSS
} from './components/variants/Variants'
import Spinner from '@atoms/Spinner/Spinner'
import { variant } from 'styled-system'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel?: string
  disabled?: boolean
  iconAlignment?: IconPositions | string
  iconType?: IconType
  id?: string
  isLoading?: boolean
  size?: Sizes | string
  text?: string
  variant?: Types | string
  action?: () => void
}

export type ButtonWithRef = Polymorphic.ForwardRefComponent<
  'button',
  ButtonProps
>

const ButtonBase = styled.button<ButtonProps>`
  ${sizes}
  ${variants}
  ${(props) =>
    variant(
      props.iconAlignment == IconPositions.left ? IconLeftCSS : IconRightCSS
    )}
`

const renderContent = (
  iconType?: IconType,
  iconAlignment?: IconPositions | string,
  text?: string,
  isLoading?: boolean
): React.ReactChild => {
  if (isLoading) {
    return (
      <>
        <Spinner label="Carregando..." />
        {text}
      </>
    )
  }
  if (iconType && text) {
    return (
      <>
        {(!iconAlignment || iconAlignment === IconPositions.right) && text}
        <Icon type={iconType} aria-hidden="true" />
        {iconAlignment === IconPositions.left && text}
      </>
    )
  }
  return text || ''
}

const renderIconAsContent = (icon: IconType): React.ReactChild => (
  <Icon type={icon} aria-hidden="true" />
)

const Button: ButtonWithRef = React.forwardRef(
  (
    {
      size = Sizes.md,
      as = 'button',
      variant = Types.contained,
      ariaLabel,
      disabled,
      iconType,
      iconAlignment,
      id,
      isLoading = false,
      text,
      ...props
    },
    ref
  ) => {
    return (
      <ButtonBase
        {...props}
        ref={ref}
        as={as}
        aria-label={ariaLabel}
        disabled={disabled}
        id={id}
        size={variant === Types.link ? Sizes.link : size}
        variant={size === Sizes.link ? Types.link : variant}
        iconAlignment={iconAlignment}
      >
        {iconType && !text
          ? renderIconAsContent(iconType)
          : renderContent(iconType, iconAlignment, text, isLoading)}
      </ButtonBase>
    )
  }
) as ButtonWithRef

export default Button
