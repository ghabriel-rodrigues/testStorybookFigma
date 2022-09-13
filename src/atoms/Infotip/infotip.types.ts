import { ComponentPropsWithoutRef } from 'react'
import { PositionVariant } from './types/Types'

export type InfoTipProps = {
  tooltipText: string
  position?: PositionVariant | string
  delay?: number
  onOpenChange?: (isOpen: boolean) => void
  ariaLabel?: string
  buttonProps?: ComponentPropsWithoutRef<'button'>
}
