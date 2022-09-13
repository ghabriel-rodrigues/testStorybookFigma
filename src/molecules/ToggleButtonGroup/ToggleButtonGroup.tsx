import React from 'react'
import styled, { css } from 'styled-components'
import { nanoid } from 'nanoid'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'

import Label from '@atoms/Label/Label'

import { ToggleButtonItem } from './components/types'
import { Wrapper, ToggleGroup } from './components/ToggleButtonGroupComponents'
import ToggleButtonGroupCSS from './ToggleButtonGroup.styles'
import { DsColorGrayPolarLight, DsColorGraySteel } from '@/tokens/tokens'
interface ToggleButtonGroupProps {
  id: string
  label: string
  ariaLabelGroup: string
  data: Array<ToggleButtonItem>
  disabled?: boolean
  defaultValue?: string
  onChange?: () => void
}

const StyledItem = styled(ToggleGroupPrimitive.Item)`
  ${ToggleButtonGroupCSS}
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${DsColorGrayPolarLight};
      border-color: ${DsColorGraySteel};
      color: ${DsColorGraySteel};
      pointer-events: none;
    `}
`
export const ToggleGroupItem = StyledItem

const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({
  id,
  label,
  data,
  defaultValue,
  ariaLabelGroup,
  onChange,
  disabled = false,
  ...props
}) => {
  if (!data) {
    return null
  }
  return (
    <Wrapper>
      <Label htmlFor={id} {...props}>
        {label}
      </Label>
      <ToggleGroup
        type="single"
        aria-label={ariaLabelGroup}
        defaultValue={defaultValue}
        disabled={disabled}
        onValueChange={onChange}
      >
        {data.map((toggleItem) => {
          const uuid = nanoid()
          return (
            <ToggleGroupItem
              key={uuid}
              value={toggleItem.value}
              aria-label={toggleItem.label}
              disabled={disabled}
            >
              {toggleItem.label}
            </ToggleGroupItem>
          )
        })}
      </ToggleGroup>
    </Wrapper>
  )
}

export default ToggleButtonGroup
