import { vi } from 'vitest'
import { render as tlRender } from '@testing-library/react'
import { SearchComboBox, Item } from '@/molecules/SearchComboBox'
import { items } from './data'

const defaultProps = {
  items,
  allowsCustomValue: true,
  onSubmit: vi.fn(),
  label: 'Job',
  inputProps: {
    'aria-label': 'Job'
  },
  buttonProps: {
    'aria-label': 'Search jobs'
  }
}

export const render = (props = {}) => {
  const searchProps = { ...defaultProps, ...props }
  return tlRender(
    <SearchComboBox {...searchProps}>
      {(item) => <Item>{item.value}</Item>}
    </SearchComboBox>
  )
}
