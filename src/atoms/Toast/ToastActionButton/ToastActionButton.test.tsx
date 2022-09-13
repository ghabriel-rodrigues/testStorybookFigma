import React from 'react'
import { it, describe, expect, vi } from 'vitest'
import { axe } from 'jest-axe'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ToastActionButton from './ToastActionButton'

const handleClick = vi.fn()

const actionButton = {
  description: 'action button',
  action: handleClick
}

describe('./src/atoms/Toast/ToastActionButton', () => {
  it('Should render the component', async () => {
    render(<ToastActionButton actionButton={actionButton} />)

    const button = screen.getByRole('button', {
      name: 'action button'
    })

    expect(button).toBeInTheDocument()
  })

  it('Component should be clickable', async () => {
    render(<ToastActionButton actionButton={actionButton} />)

    const button = screen.getByRole('button', {
      name: 'action button'
    })
    userEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('Should not have basic a11y issues', async () => {
    const { container } = render(
      <ToastActionButton actionButton={actionButton} />
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
