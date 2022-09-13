import React from 'react'
import { it, describe, expect } from 'vitest'
import { axe } from 'jest-axe'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import InputText from './InputText'
import sampleIcon from './components/test-data'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const renderComponent = (props = {}) =>
  render(
    <InputText
      {...props}
      id="id-to-input"
      placeholder="My placeholder to input"
      label="Label to input"
      helperMessage="Additional message in order to help user"
    />
  )
describe('./src/molecules/InputText', () => {
  it('should render component and insert text on Input', async () => {
    renderComponent()
    const inputComponent = screen.getByPlaceholderText(
      'My placeholder to input'
    )
    expect(inputComponent).toBeInTheDocument()
    expect(
      screen.getByText('Additional message in order to help user')
    ).toBeInTheDocument()

    userEvent.type(inputComponent, 'My user name')

    expect(screen.getByDisplayValue('My user name')).toBeInTheDocument()
  })

  it('should render component with icons', async () => {
    const { container } = renderComponent({
      icons: [sampleIcon],
      iconPosition: 'left'
    })

    expect(container.querySelectorAll('i')).toHaveLength(1)
  })

  it('should render component with disabled behavior', async () => {
    renderComponent({ disabled: true })
    const inputComponent = screen.getByPlaceholderText(
      'My placeholder to input'
    )
    expect(inputComponent).toBeInTheDocument()
    expect(
      screen.getByText('Additional message in order to help user')
    ).toBeInTheDocument()

    userEvent.type(inputComponent, 'My user name')

    expect(screen.queryByDisplayValue('My user name')).not.toBeInTheDocument()
  })

  it('should not have have basic accessibility issues', async () => {
    const { container } = render(
      <InputText
        id="id-to-input"
        placeholder="My placeholder to input"
        label="Label to input"
      />
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
