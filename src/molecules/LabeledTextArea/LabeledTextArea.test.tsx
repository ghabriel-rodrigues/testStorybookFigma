import React from 'react'
import { it, describe, expect } from 'vitest'
import { axe } from 'jest-axe'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import LabeledTextArea from './LabeledTextArea'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const renderComponent = (props = {}) =>
  render(
    <LabeledTextArea
      {...props}
      id="id-to-labeled-textarea"
      placeholder="My placeholder to LabeledTextArea"
      label="Label to LabeledTextArea"
    />
  )
describe('molecules/LabeledTextArea', () => {
  it('should render component and insert text on LabeledTextArea', async () => {
    renderComponent()
    const textareaComponent = screen.getByPlaceholderText(
      'My placeholder to LabeledTextArea'
    )
    expect(textareaComponent).toBeInTheDocument()

    userEvent.type(textareaComponent, 'My user name')

    expect(screen.getByDisplayValue('My user name')).toBeInTheDocument()
  })

  it('should render component with disabled behavior', async () => {
    renderComponent({ disabled: true })
    const textareaComponent = screen.getByPlaceholderText(
      'My placeholder to LabeledTextArea'
    )
    expect(textareaComponent).toBeInTheDocument()

    userEvent.type(textareaComponent, 'My user name')

    expect(screen.queryByDisplayValue('My user name')).not.toBeInTheDocument()
  })

  it('should not have have basic accessibility issues', async () => {
    const { container } = render(
      <LabeledTextArea
        id="id-to-labeled-textarea"
        placeholder="My placeholder to LabeledTextArea"
        label="Label to LabeledTextArea"
      />
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
