import React from 'react'
import styled from 'styled-components'

import { ToastClose } from './ToastCloseButton.styles'

interface Props {
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ToastCloseButtonContainer = styled.button<Props>`
  ${ToastClose}
`

const ToastCloseButton: React.FC<Props> = ({ onClose }) => {
  return (
    <>
      <ToastCloseButtonContainer
        onClick={onClose}
        aria-label="Aperte para fechar o aviso"
      >
        <svg
          className="jss1275 jss1282"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
          role="presentation"
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </svg>
      </ToastCloseButtonContainer>
    </>
  )
}

export default ToastCloseButton
