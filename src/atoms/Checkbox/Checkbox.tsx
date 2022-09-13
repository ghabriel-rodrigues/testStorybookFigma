import React, { InputHTMLAttributes, useState } from 'react'
import styled from 'styled-components'

import Tick from '@atoms/Icon/components/svgs/Tick'

import modifiers, { disabledModifier } from './Modifiers'

// @DEV: Hiding checkbox but keeping it accessible to screen readers.
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string

  ariaLabel?: string
  checked?: boolean
  checkedState?: boolean
  disabledState?: boolean
  disabled?: boolean
}

const CustomCheckbox = styled.span<Props>`
  ${modifiers}
  ${disabledModifier}
`

const Checkbox: React.FC<Props> = ({
  checked = false,
  disabled = false,
  ...props
}) => {
  const { ariaLabel, id, tabIndex } = props
  const [actualState, setActualState] = useState(checked)
  const handleChange = (): void => {
    if (!disabled) {
      setActualState(!actualState)
    }
  }
  return (
    <div
      aria-checked={actualState}
      role="checkbox"
      tabIndex={tabIndex}
      title={ariaLabel || id}
      onClick={handleChange}
      onKeyPress={handleChange}
    >
      <HiddenCheckbox
        checked={actualState}
        disabled
        id={id}
        onChange={handleChange}
        // eslint-disable-next-line @typescript-eslint/ban-types
        {...(props as {})}
        aria-hidden={'true'}
        tabIndex={-1}
      />
      <CustomCheckbox
        id={`styled-checkbox-${id}`}
        checked={actualState}
        checkedState={actualState}
        disabledState={disabled}
        disabled
        aria-hidden={'true'}
        tabIndex={-1}
      >
        <Tick />
      </CustomCheckbox>
    </div>
  )
}

export default Checkbox
