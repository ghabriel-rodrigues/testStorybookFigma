import React from 'react'
import { it, describe, expect } from 'vitest'
import { axe } from 'jest-axe'
import { getByRole, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Toast from './Toast'
import Button from '@atoms/Button/Button'

let isOpened = false

const actionButton = {
  description: 'not clicked',
  action: () => (actionButton.description = 'clicked')
}

const closeButton = () => (isOpened = false)

const buttonClick = () => (isOpened = true)

describe('./src/molecules/Toast', () => {
  it('Should render the component', async () => {
    render(
      <Toast
        message="Toast Warning"
        id="teste"
        open={isOpened}
        actionButton={actionButton}
        onClose={closeButton}
      />
    )

    const toast = await screen.findByText('Toast Warning')

    expect(toast).toBeInTheDocument()
  })

  it('Component should be hidden', async () => {
    render(
      <Toast
        message="Toast Warning"
        id="teste"
        open={isOpened}
        actionButton={actionButton}
        onClose={closeButton}
      />
    )

    const toast = await screen.findByText('Toast Warning')

    expect(toast).not.toBeVisible()
  })

  it('Component should be visible', async () => {
    const { rerender } = render(
      <Toast
        message="Toast Warning"
        id="teste"
        open={isOpened}
        actionButton={actionButton}
        onClose={closeButton}
      />
    )

    const { container } = render(
      <Button id="teste" text="teste" onClick={buttonClick} />
    )

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const button = (await getByRole(container, 'button')) as any
    userEvent.click(button)

    rerender(
      <Toast
        message="Toast Warning"
        id="teste"
        open={isOpened}
        actionButton={actionButton}
        onClose={closeButton}
      />
    )

    const toast = await screen.findByText('Toast Warning')

    expect(toast).toBeVisible()
  })

  it('Action button should work', () => {
    const { rerender } = render(
      <Toast
        message="Toast Warning"
        id="teste"
        open={isOpened}
        actionButton={actionButton}
        onClose={closeButton}
      />
    )

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const button = screen.getByRole('button', {
      name: 'not clicked'
    })
    userEvent.click(button)

    rerender(
      <Toast
        message="Toast Warning"
        id="teste"
        open={isOpened}
        actionButton={actionButton}
        onClose={closeButton}
      />
    )

    const clickedButton = screen.getByRole('button', {
      name: 'clicked'
    })

    return expect(clickedButton).toBeInTheDocument()
  })

  it('Component should not be visible after close button click', async () => {
    const { rerender } = render(
      <Toast
        message="Toast Warning"
        id="teste"
        open={isOpened}
        actionButton={actionButton}
        onClose={closeButton}
      />
    )

    const { container } = render(
      <Button id="teste" text="teste" onClick={buttonClick} />
    )

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const button = getByRole(container, 'button') as any
    userEvent.click(button)

    const closeBtn = screen.getByRole('button', {
      name: 'Aperte para fechar o aviso'
    })
    userEvent.click(closeBtn)

    rerender(
      <Toast
        message="Toast Warning"
        id="teste"
        open={isOpened}
        actionButton={actionButton}
        onClose={closeButton}
      />
    )

    const toast = await screen.findByText('Toast Warning')

    expect(toast).not.toBeVisible()
  })

  it('Should not have basic a11y issues', async () => {
    const { container } = render(
      <Toast
        message="Toast Warning"
        id="teste"
        open={isOpened}
        actionButton={actionButton}
        onClose={closeButton}
      />
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
