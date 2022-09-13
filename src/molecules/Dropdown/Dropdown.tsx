import React from 'react'
import Label from '@/atoms/Label/Label'
import Select, { SelectProps } from '@atoms/Select/Select'
import { MultiValue } from './MultiValue'
import { DropdownWrapCSS, DropdownLabelCSS } from './Dropdown.styles'
import styled from 'styled-components'

export interface DropdownProps extends SelectProps {
  id: string
  label: string
}

const DropdownWrap = styled.div`
  ${DropdownWrapCSS}
`

const DropdownLabel = styled(Label)`
  ${DropdownLabelCSS}
`

const Dropdown: React.FC<DropdownProps> = ({ id, label, ...props }) => (
  <DropdownWrap>
    <DropdownLabel htmlFor={id}>{label}</DropdownLabel>
    <Select {...props} id={id} components={{ MultiValue } as any} />
  </DropdownWrap>
)

export default Dropdown
