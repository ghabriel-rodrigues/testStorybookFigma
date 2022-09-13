import React from 'react'
import { it, describe, expect, vi } from 'vitest'
import { axe } from 'jest-axe'
import { getByRole, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ToastCloseButton from './ToastCloseButton'

describe('./src/atoms/Toast/ToastCloseButton', () => {
  it('Should render the component', async () => {
    const handleClick = vi.fn()
    render(<ToastCloseButton onClose={handleClick} />)

    const toast = await screen.getByRole('button', {
      name: 'Aperte para fechar o aviso'
    })

    expect(toast).toBeInTheDocument()
  })

  it('Component should be clickable', async () => {
    const handleClick = vi.fn()
    const { container } = render(<ToastCloseButton onClose={handleClick} />)

    const button = getByRole(container, 'button')
    userEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('Should not have basic a11y issues', async () => {
    const handleClick = vi.fn()
    const { container } = render(<ToastCloseButton onClose={handleClick} />)

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
