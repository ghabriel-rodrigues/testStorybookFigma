import React from 'react'
import ReactSelect, { Props } from 'react-select'
import styles from './Modifiers'
import { Option } from './types'

export interface SelectProps extends Props {
  options: Array<Option>
  ariaLabel: string
}

const Select: React.FC<SelectProps> = ({
  ariaLabel,
  options = [],
  isMulti = false,
  isSearchable = false,
  ...props
}) => {
  if (!options) {
    return null
  }

  return (
    <ReactSelect
      {...props}
      options={options}
      aria-label={ariaLabel}
      styles={styles}
      isMulti={isMulti}
      isSearchable={isSearchable}
    />
  )
}

export default Select
