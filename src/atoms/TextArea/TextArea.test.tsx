import { it, describe, expect } from 'vitest'
import { axe } from 'jest-axe'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TextArea from './TextArea'

describe('./src/atoms/TextArea', () => {
  it('should render component and insert text on TextArea', async () => {
    render(
      <TextArea id="id-to-TextArea" placeholder="My placeholder to TextArea" />
    )

    const TextAreaComponent = screen.getByPlaceholderText(
      'My placeholder to TextArea'
    )
    expect(TextAreaComponent).toBeInTheDocument()
    userEvent.type(TextAreaComponent, 'My user name')

    expect(screen.getByDisplayValue('My user name')).toBeInTheDocument()
  })

  it('should not have basic accessibility issues', async () => {
    const { container } = render(
      <TextArea id="id-to-textarea" placeholder="My placeholder to TextArea" />
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
