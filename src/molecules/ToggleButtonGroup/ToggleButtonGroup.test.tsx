import React from 'react'
import { it, describe, expect } from 'vitest'
import { axe } from 'jest-axe'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ToggleButtonGroup from './ToggleButtonGroup'

describe('./src/molecules/ToggleButtonGroup', () => {
  it('Should render the component and interact with itself', () => {
    render(
      <ToggleButtonGroup
        id="input-text"
        ariaLabelGroup="Grupo de atalhos para edição da lista e usuários"
        label="My input label here"
        data={[
          { label: 'Label - 1', value: 'Label-1' },
          { label: 'Label - 2', value: 'Label-2' }
        ]}
      />
    )
    expect(screen.getByText('My input label here')).toBeInTheDocument()
    const firstButtonElement = screen.getByText('Label - 1')
    expect(firstButtonElement).toBeInTheDocument()
    expect(firstButtonElement).toHaveAttribute('aria-checked', 'false')

    const secondButtonElement = screen.getByText('Label - 2')
    expect(secondButtonElement).toBeInTheDocument()
    expect(secondButtonElement).toHaveAttribute('aria-checked', 'false')

    userEvent.click(firstButtonElement)
    expect(firstButtonElement).toHaveAttribute('aria-checked', 'true')
    expect(secondButtonElement).toHaveAttribute('aria-checked', 'false')

    userEvent.click(firstButtonElement)
    expect(firstButtonElement).toHaveAttribute('aria-checked', 'false')
    expect(secondButtonElement).toHaveAttribute('aria-checked', 'false')
  })
  it('Should not have basic a11y issues', async () => {
    const { container } = render(
      <ToggleButtonGroup
        id="input-text"
        ariaLabelGroup="Grupo de atalhos para edição da lista e usuários"
        label="My input label here"
        data={[
          { label: 'Label - 1', value: 'Label-1' },
          { label: 'Label - 2', value: 'Label-2' }
        ]}
      />
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
