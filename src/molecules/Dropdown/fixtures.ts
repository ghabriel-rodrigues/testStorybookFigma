import { vi } from 'vitest'

const spyOnChange = vi.fn()

export const defaultProps = {
  id: 'languages-dropdown',
  label: 'Languages',
  name: 'languages',
  placeholder: 'Choose your option, e.g.: Portuguese',
  ariaLabel: 'It chooses options for your language list',
  onChange: spyOnChange,
  options: [
    {
      label: 'Portuguese',
      value: 'pt'
    },
    {
      label: 'Spanish',
      value: 'es'
    },
    {
      label: 'English',
      value: 'en'
    }
  ]
}
