import {
  DsBorderWidth,
  DsColorPrimaryBlue,
  TempColorGray
} from '@/tokens/tokens'
import InputHelperMessage from '@atoms/InputHelperMessage/InputHelperMessage'
import Label from '@atoms/Label/Label'
import { useFocusRing } from '@react-aria/focus'
import { useSwitch } from '@react-aria/switch'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { useToggleState } from '@react-stately/toggle'
import css from '@styled-system/css'
import React from 'react'
import styled from 'styled-components'
import {
  labelFirst,
  switchThumbChecked,
  switchToggleDisabled
} from './modifiers/Modifiers'
import {
  SwitchBaseCSS,
  SwitchContainerCSS,
  SwitchThumbCSS,
  SwitchToggleCSS
} from './Switch.styles'
import {
  SwitchContainerProps,
  SwitchProps,
  SwitchThumbProps,
  SwitchToggleProps
} from './Switch.types'

export const SwitchBase = styled.span`
  ${SwitchBaseCSS}
`

export const SwitchContainer = styled.label<SwitchContainerProps>`
  ${SwitchContainerCSS}
  ${labelFirst}

  ${({ isFocused }) =>
    isFocused &&
    css({
      outline: `${DsBorderWidth} solid ${DsColorPrimaryBlue}`
    })}
`

export const SwitchToggle = styled.span<SwitchToggleProps>`
  ${SwitchToggleCSS}
  ${switchToggleDisabled}

  ${({ isChecked, isDisabled }) =>
    isChecked &&
    css({
      '&::before': {
        backgroundColor: isDisabled ? TempColorGray : DsColorPrimaryBlue,
        opacity: isDisabled ? 1 : 0.5
      }
    })}
`

export const SwitchThumb = styled.span<SwitchThumbProps>`
  ${SwitchThumbCSS}
  ${switchThumbChecked}
`

const Switch = ({ labelFirst, errorMessage, ...props }: SwitchProps) => {
  const propsExtended = {
    ...props,
    isSelected: props.checked,
    isDisabled: props.disabled,
    children: props.label
  }
  const ref = React.useRef<HTMLInputElement>(null)
  const state = useToggleState(propsExtended)
  const { inputProps } = useSwitch(propsExtended, state, ref)
  const { isFocusVisible, focusProps } = useFocusRing()

  return (
    <SwitchBase>
      <SwitchContainer isFocused={isFocusVisible} labelFirst={labelFirst}>
        <VisuallyHidden>
          <input ref={ref} {...inputProps} {...focusProps} />
        </VisuallyHidden>
        <SwitchToggle
          isChecked={state.isSelected}
          isDisabled={inputProps.disabled}
        >
          <SwitchThumb
            isChecked={state.isSelected}
            isDisabled={inputProps.disabled}
          />
        </SwitchToggle>
        <Label {...{ as: 'span' }} htmlFor={props.id}>
          {props.label}
        </Label>
      </SwitchContainer>
      {errorMessage && (
        <InputHelperMessage id={props.id} hasError>
          {errorMessage}
        </InputHelperMessage>
      )}
    </SwitchBase>
  )
}

export default Switch
