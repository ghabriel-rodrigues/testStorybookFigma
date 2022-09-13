import React, { ButtonHTMLAttributes, useEffect, useState } from 'react'
import * as Toggle from '@radix-ui/react-toggle'
import styled from 'styled-components'

import Button from '@atoms/Button/Button'
import { ToggleButtonCSS, ToggleButtonPressedCSS } from './ToggleButton.styles'

interface ToggleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string
  isSelected?: boolean
  text: string
  onClick?: () => void
}

const ButtonComponent = styled(Button)<ToggleButtonProps>`
  ${ToggleButtonCSS}
  ${ToggleButtonPressedCSS}
`

const ToggleButton: React.FC<ToggleButtonProps> = ({
  id,
  onClick,
  text,
  isSelected = false,
  ...props
}: ToggleButtonProps) => {
  const [isToggleSelected, setIsToggleSelected] = useState(isSelected)
  useEffect(() => {
    setIsToggleSelected(isSelected)
  }, [isSelected])

  const handlePressedChange = (pressed: boolean) => {
    setIsToggleSelected(pressed)
    if (onClick) {
      onClick()
    }
  }

  return (
    <Toggle.Root
      asChild
      defaultPressed={isSelected}
      onPressedChange={(pressed: boolean) => handlePressedChange(pressed)}
    >
      <ButtonComponent
        variant="outlined"
        id={id}
        text={text}
        isSelected={isToggleSelected}
        {...props}
      />
    </Toggle.Root>
  )
}

export default ToggleButton
