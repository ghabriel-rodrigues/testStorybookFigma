// eslint-disable @typescript-eslint/no-explicit-any
import React from 'react'
import styled from 'styled-components'
import {
  ToastContainer,
  ToastBox,
  ToastText,
  ToastActions,
  ToastBoxVariants
} from './Toast.styles'
import ToastActionButton from '@atoms/Toast/ToastActionButton/ToastActionButton'
import ToastCloseButton from '@atoms/Toast/ToastCloseButton/ToastCloseButton'
import { ROLES } from './Types'

interface Action {
  description: string
  action: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface Props {
  open?: boolean
  id?: string
  ariaLabel?: string
  message?: string
  toastRole?: ROLES
  actionButton?: Action
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface ToastBoxProps {
  open?: boolean
}

interface ToastTextProps {
  message?: string
}

interface ToastActionsProps {
  actionButton?: Action
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const BaseToast = styled.div<Props>`
  ${ToastContainer}
`

const BaseToastBox = styled.div<ToastBoxProps>`
  ${ToastBox}
  ${ToastBoxVariants}
`

const BaseToastText = styled.div<ToastTextProps>`
  ${ToastText}
`

const BaseToastActions = styled.div<ToastActionsProps>`
  ${ToastActions}
`

const Toast: React.FC<Props> = ({
  ariaLabel,
  id,
  message,
  toastRole,
  actionButton,
  open = false,
  onClose
}) => {
  return (
    <>
      <BaseToast
        aria-label={ariaLabel}
        id={id}
        role={toastRole ?? 'alert'}
        aria-hidden={!open}
      >
        <BaseToastBox open={open}>
          <BaseToastText>{message}</BaseToastText>
          <BaseToastActions>
            <ToastActionButton actionButton={actionButton} />
            <ToastCloseButton onClose={onClose} />
          </BaseToastActions>
        </BaseToastBox>
      </BaseToast>
    </>
  )
}

export default Toast
