import { it, describe, expect } from 'vitest'
import { axe } from 'jest-axe'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from './Input'

describe('./src/atoms/Input', () => {
  it('should render component and insert text on Input', async () => {
    render(<Input id="id-to-input" placeholder="My placeholder to input" />)

    const inputComponent = screen.getByPlaceholderText(
      'My placeholder to input'
    )
    expect(inputComponent).toBeInTheDocument()
    userEvent.type(inputComponent, 'My user name')

    expect(screen.getByDisplayValue('My user name')).toBeInTheDocument()
  })

  it('should not have have basic accessibility issues', async () => {
    const { container } = render(
      <Input id="id-to-input" placeholder="My placeholder to input" />
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
