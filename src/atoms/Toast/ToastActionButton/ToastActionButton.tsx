import React from 'react'
import styled from 'styled-components'

import { ToastAction } from './ToastActionButton.styles'

interface Action {
  description: string
  action: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface Props {
  actionButton?: Action
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ToastActionButtonContainer = styled.button<Props>`
  ${ToastAction}
`

const ToastActionButton: React.FC<Props> = ({ actionButton }) => {
  if (actionButton && actionButton.description) {
    return (
      <ToastActionButtonContainer onClick={actionButton?.action}>
        {actionButton?.description}
      </ToastActionButtonContainer>
    )
  } else {
    return null
  }
}

export default ToastActionButton
