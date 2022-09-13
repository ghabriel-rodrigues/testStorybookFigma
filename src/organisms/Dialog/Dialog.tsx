import React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import styled, { css, keyframes } from 'styled-components'

import { IconType } from '@/atoms/Icon/enums'
import Button, { ButtonProps } from '@/atoms/Button/Button'
import Icon from '@/atoms/Icon/Icon'
import {
  DialogButtons,
  DialogFooterProps,
  DialogPortalProps,
  DialogProps,
  DialogTitleProps,
  WindowProps
} from './Dialog.types'

import {
  CloseButtonCSS,
  StyledContentCSS,
  StyledFooterCSS,
  StyledOverlayCSS,
  StyledTitleCSS,
  StyledWindowCSS,
  size,
  StyledContentWrapperCSS,
  fullScreenWithoutBorderRadius,
  fullScreenFooterVariants
} from './Dialog.styles'

const StyledButton = styled(Button)``

const DialogFooterButton = ({
  ariaLabel,
  disabled = false,
  isLoading = false,
  size = 'md',
  text,
  variant = 'contained',

  action
}: DialogButtons) => (
  <StyledButton
    action={action}
    ariaLabel={ariaLabel}
    disabled={disabled}
    isLoading={isLoading}
    size={size}
    text={text}
    variant={variant}
  />
)

const getDialogFooterButtons = (
  primaryButton?: ButtonProps,
  secondaryButton?: ButtonProps
) => {
  return (
    <>
      {primaryButton ?? null} {secondaryButton ?? null}
    </>
  )
}

// @DEV: Keyframes are not supported in styled-system css
export const overlayShow = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

export const contentShow = keyframes`
  0%   { opacity: 0; transform: translate(-50%, -48%) scale(.96) }
  100% { opacity: 1; transform: translate(-50%, -50%) scale(1) }
`

const StyledOverlay = styled(DialogPrimitive.Overlay)`
  ${StyledOverlayCSS}
  @media (prefers-reduced-motion: no-preference) {
    animation: ${overlayShow} 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    opacity: 1;
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    will-change: opacity;
  }
`

const StyledWindow = styled.div<WindowProps>`
  ${size}
  ${StyledWindowCSS}
  ${fullScreenWithoutBorderRadius}
  ${({ zIndex }) =>
    zIndex !== undefined &&
    css`
      z-index: ${zIndex};
    `}
  @media (prefers-reduced-motion: no-preference) {
    animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
`

const StyledTitle = styled(DialogPrimitive.Title)<DialogTitleProps>`
  ${StyledTitleCSS}
  ${fullScreenWithoutBorderRadius}
`

const StyledContentWrapper = styled(DialogPrimitive.Content)`
  ${StyledContentWrapperCSS}
`

const StyledContent = styled.div`
  ${StyledContentCSS}
`

const StyledFooter = styled.div<DialogFooterProps>`
  ${StyledFooterCSS}
  ${fullScreenFooterVariants}
`

const CloseButton = styled.button`
  ${CloseButtonCSS}
`

const DialogPortal = ({
  size,
  children,
  zIndex,
  ...props
}: DialogPortalProps) => {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledWindow zIndex={zIndex} size={size}>
        <StyledContentWrapper {...props}>{children}</StyledContentWrapper>
      </StyledWindow>
    </DialogPrimitive.Portal>
  )
}

const Dialog: React.FC<DialogProps> = ({
  allowPinchZoom,
  children,
  defaultOpen,
  modal,
  open,
  primaryButton,
  secondaryButton,
  title,
  triggerButton,
  size = 'md',
  zIndex,
  footerVariant = 'horizontal',

  onOpenChange,
  onOpenAutoFocus,
  onCloseAutoFocus,
  onEscapeKeyDown,
  onPointerDownOutside,
  onInteractOutside
}) => {
  return (
    <DialogBase
      allowPinchZoom={allowPinchZoom}
      defaultOpen={defaultOpen}
      modal={modal}
      onOpenChange={onOpenChange}
      open={open}
    >
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>
      <DialogWindow
        zIndex={zIndex}
        size={size}
        onCloseAutoFocus={onCloseAutoFocus}
        onEscapeKeyDown={onEscapeKeyDown}
        onInteractOutside={onInteractOutside}
        onOpenAutoFocus={onOpenAutoFocus}
        onPointerDownOutside={onPointerDownOutside}
      >
        {title ? <DialogHeader size={size}>{title}</DialogHeader> : null}
        <DialogMain>{children}</DialogMain>
        {primaryButton || secondaryButton ? (
          <DialogFooter footerVariant={footerVariant}>
            {getDialogFooterButtons(primaryButton, secondaryButton)}
          </DialogFooter>
        ) : null}
        <DialogClose asChild>
          <CloseButton data-testid="Close">
            <Icon type={IconType.Close} />
          </CloseButton>
        </DialogClose>
      </DialogWindow>
    </DialogBase>
  )
}

const DialogOverlay = StyledOverlay
const DialogBase = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogWindow = DialogPortal
const DialogHeader = StyledTitle
const DialogMain = StyledContent
const DialogFooter = StyledFooter
const DialogClose = DialogPrimitive.Close
const DialogButton = DialogFooterButton

export {
  Dialog,
  DialogOverlay,
  DialogBase,
  DialogTrigger,
  DialogWindow,
  DialogHeader,
  DialogMain,
  DialogFooter,
  DialogClose,
  DialogButton
}
