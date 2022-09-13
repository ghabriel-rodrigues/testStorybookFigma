import React, { ComponentPropsWithRef } from 'react'

type CustomProps = {
  direction: 'left' | 'right'
  disabled?: boolean
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    args: { direction: string }
  ) => void
}

export type DirectionButtonProps = CustomProps &
  Omit<ComponentPropsWithRef<'button'>, keyof CustomProps>
