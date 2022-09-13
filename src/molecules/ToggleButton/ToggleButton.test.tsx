import React from 'react'
import { it, describe, expect } from 'vitest'
import { axe } from 'jest-axe'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ToggleButton from './ToggleButton'

describe('./src/molecules/ToggleButton', () => {
  it('Should render the component and interact with itself', () => {
    render(<ToggleButton id="teste" text="My Button" />)
    const buttonElement = screen.getByText('My Button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveAttribute('aria-pressed', 'false')

    userEvent.click(buttonElement)
    expect(buttonElement).toHaveAttribute('aria-pressed', 'true')

    userEvent.click(buttonElement)
    expect(buttonElement).toHaveAttribute('aria-pressed', 'false')
  })
  it('Should not have basic a11y issues', async () => {
    const { container } = render(<ToggleButton id="teste" text="teste" />)

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
