import { ButtonProps } from '@/atoms/Button/Button'
import { DialogHTMLAttributes } from 'react'

enum Sizes {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  fullScreen = 'fullScreen'
}

interface DialogButtons extends ButtonProps {
  action?: () => void
  disabled?: boolean
  isLoading?: boolean
}

type DialogTitleProps = {
  size?: Sizes | string
}

type DialogFooterProps = { footerVariant?: 'horizontal' | 'vertical' }

interface DialogProps
  extends DialogHTMLAttributes<HTMLElement>,
    DialogFooterProps {
  children: React.ReactNode
  title?: string
  allowPinchZoom?: boolean
  defaultOpen?: boolean
  modal?: boolean
  open?: boolean
  primaryButton?: ButtonProps
  secondaryButton?: ButtonProps
  size?: Sizes | string
  triggerButton?: ButtonProps
  zIndex?: number

  onCloseAutoFocus?: () => void
  onEscapeKeyDown?: () => void
  onInteractOutside?: () => void
  onOpenAutoFocus?: () => void
  onOpenChange?: (open?: boolean) => void
  onPointerDownOutside?: () => void
}

interface DialogPortalProps {
  children: Array<React.ReactNode>
  size: Sizes | string
  zIndex?: number

  onCloseAutoFocus?: () => void
  onEscapeKeyDown?: () => void
  onInteractOutside?: () => void
  onOpenAutoFocus?: () => void
  onOpenChange?: () => void
  onPointerDownOutside?: () => void
}

type WindowProps = { size?: Sizes | string; zIndex?: number }

export { Sizes }
export type {
  DialogButtons,
  DialogProps,
  DialogPortalProps,
  WindowProps,
  DialogTitleProps,
  DialogFooterProps
}
