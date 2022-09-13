import { useFocusRing } from '@react-aria/focus'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import React from 'react'
import styled from 'styled-components'
import modifiers, { disabledModifier, focusedModifier } from './Modifiers'
import { useRadio } from './Radio.hooks'
import { BaseRadioCSS } from './Radio.styles'
import {
  BaseRadioProps,
  RadioCheckedState,
  RadioDisabledState,
  RadioProps
} from './Radio.types'

const BaseRadio = styled.span<BaseRadioProps>`
  ${BaseRadioCSS}
  ${modifiers}
  ${disabledModifier}
  ${focusedModifier}
`

const Radio: React.FC<RadioProps> = (props) => {
  const ref = React.useRef<HTMLInputElement>(null)
  const { inputProps, isSelected, isDisabled } = useRadio(props, ref)
  const { isFocusVisible, focusProps } = useFocusRing()

  const content = (
    <>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <BaseRadio
        isFocused={isFocusVisible}
        checkedState={
          isSelected ? RadioCheckedState.checked : RadioCheckedState.unchecked
        }
        disabledState={
          isDisabled ? RadioDisabledState.disabled : RadioDisabledState.enabled
        }
      />
    </>
  )

  return content
}

export default Radio
