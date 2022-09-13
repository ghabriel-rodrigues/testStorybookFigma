import { it, describe, expect, vi } from 'vitest'
import { axe } from 'jest-axe'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import InputSearch from './InputSearch'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const renderComponent = (props = {}) =>
  render(
    <InputSearch
      {...props}
      id="id-to-input"
      placeholder="My placeholder to input"
      label="Label to input"
      buttonProps={{
        'aria-label': 'Label to Button Search'
      }}
      name="input-search-name"
    />
  )
describe('./src/molecules/InputSearch', () => {
  it('should render component and insert text on Input', async () => {
    renderComponent()
    const inputComponent = screen.getByPlaceholderText(
      'My placeholder to input'
    )
    expect(inputComponent).toBeInTheDocument()

    userEvent.type(inputComponent, 'My user name')

    expect(screen.getByDisplayValue('My user name')).toBeInTheDocument()
  })
  it('should fire events after interacting witn input', async () => {
    const spyOnSubmit = vi.fn()
    const spyOnClick = vi.fn()
    renderComponent({
      onSubmit: spyOnSubmit,
      onClick: spyOnClick
    })
    const inputComponent = screen.getByPlaceholderText(
      'My placeholder to input'
    )

    userEvent.type(inputComponent, 'My user name')
    userEvent.type(inputComponent, '{enter}')

    expect(spyOnSubmit).toBeCalled()

    userEvent.click(screen.getByRole('button'))
    expect(spyOnClick).toBeCalled()

    userEvent.type(inputComponent, '{esc}')
    expect(screen.queryByDisplayValue('My user name')).not.toBeInTheDocument()
  })
  it('should not have have basic accessibility issues', async () => {
    const { container } = render(
      <InputSearch
        id="id-to-input"
        placeholder="My placeholder to input"
        label="Label to input"
        buttonProps={{
          'aria-label': 'Label to Button Search'
        }}
        name="input-search-name"
      />
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
