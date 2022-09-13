import { axe } from 'jest-axe'
import { it, describe, expect, vi } from 'vitest'
import { render as tlRender, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Dropdown, { DropdownProps } from './Dropdown'
import { defaultProps } from './fixtures'

const selectors = {
  findDropdown: () =>
    screen.findByRole('combobox', {
      name: 'It chooses options for your language list'
    }),

  findOptionByText: (text: string) => screen.findByText(text),

  queryOptionByText: (text: string) => screen.queryByText(text)
}

const actions = {
  openDropdown: async () => {
    const dropdown = await selectors.findDropdown()
    userEvent.click(dropdown)
  },

  choiceOptionByText: async (text: string) => {
    const option = await selectors.findOptionByText(text)
    userEvent.click(option)
  }
}

const render = (props: Partial<DropdownProps> = {}) => {
  const mergedProps = { ...defaultProps, ...props }
  return tlRender(<Dropdown {...mergedProps} />)
}

describe('./src/molecules/Dropdown', () => {
  beforeEach(() => vi.clearAllMocks())

  it('should not have basic accessibility issues', async () => {
    const { container } = render()
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('should not render options on first render', () => {
    render()
    const option = selectors.queryOptionByText('Spanish')
    expect(option).not.toBeInTheDocument()
  })

  it('should render dropdown', async () => {
    render()
    const dropdown = await selectors.findDropdown()
    expect(dropdown).toBeInTheDocument()
  })

  describe('when click in dropdown field', () => {
    it('should render option items', async () => {
      render()
      await actions.openDropdown()
      const option = await selectors.findOptionByText('Spanish')
      expect(option).toBeInTheDocument()
    })
  })

  describe('when click in the option item', () => {
    it('should call the change callback with selected value', async () => {
      render()
      await actions.openDropdown()
      await actions.choiceOptionByText('Spanish')

      expect(defaultProps.onChange).toHaveBeenCalledWith(
        { label: 'Spanish', value: 'es' },
        { action: 'select-option', name: 'languages', option: undefined }
      )

      await actions.choiceOptionByText('Spanish')
      await actions.choiceOptionByText('English')

      expect(defaultProps.onChange).toHaveBeenCalledWith(
        { label: 'English', value: 'en' },
        { action: 'select-option', name: 'languages', option: undefined }
      )
    })
  })

  describe('when is in the multi-value mode', () => {
    it('should call change callback with selected values', async () => {
      render({ isMulti: true })
      await actions.openDropdown()
      await actions.choiceOptionByText('Spanish')
      await actions.openDropdown()
      await actions.choiceOptionByText('English')

      expect(defaultProps.onChange).toHaveBeenNthCalledWith(
        1,
        [
          {
            label: 'Spanish',
            value: 'es'
          }
        ],
        {
          action: 'select-option',
          name: 'languages',
          option: {
            label: 'Spanish',
            value: 'es'
          }
        }
      )

      expect(defaultProps.onChange).toHaveBeenNthCalledWith(
        2,
        [
          {
            label: 'Spanish',
            value: 'es'
          },
          {
            label: 'English',
            value: 'en'
          }
        ],
        {
          action: 'select-option',
          name: 'languages',
          option: {
            label: 'English',
            value: 'en'
          }
        }
      )
    })
  })

  describe('when is not in multi-value mode', () => {
    it('should call change callback with selected value', async () => {
      render()
      await actions.openDropdown()
      await actions.choiceOptionByText('Spanish')
      await actions.openDropdown()
      await actions.choiceOptionByText('English')

      expect(defaultProps.onChange).toHaveBeenNthCalledWith(
        1,
        {
          label: 'Spanish',
          value: 'es'
        },
        {
          action: 'select-option',
          name: 'languages'
        }
      )

      expect(defaultProps.onChange).toHaveBeenNthCalledWith(
        2,
        {
          label: 'English',
          value: 'en'
        },
        {
          action: 'select-option',
          name: 'languages'
        }
      )
    })
  })
})
