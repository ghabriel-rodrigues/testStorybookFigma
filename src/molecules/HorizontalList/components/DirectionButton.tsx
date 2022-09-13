import BaseButton from '@atoms/Button/Button'
import { IconType } from '@atoms/Icon/enums'
import React, { useCallback, useMemo } from 'react'
import styled from 'styled-components'
import { DirectionButtonStyles } from './DirectionButton.styles'
import { DirectionButtonProps } from './DirectionButton.types'

const Button = styled(BaseButton)`
  ${DirectionButtonStyles}
  ${({ disabled }) => disabled && `cursor: default;`}
`

export const DirectionButton: React.FC<DirectionButtonProps> = ({
  direction,
  onClick: baseOnClick,
  ...props
}) => {
  const iconName = useMemo(() => {
    return direction === 'left' ? IconType.ChevronLeft : IconType.ChevronRight
  }, [direction])

  const onClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      baseOnClick?.(event, { direction })
    },
    []
  )

  return (
    <Button
      aria-hidden
      variant="outlined"
      tabIndex={-1}
      iconType={iconName}
      onClick={onClick}
      {...props}
    />
  )
}
