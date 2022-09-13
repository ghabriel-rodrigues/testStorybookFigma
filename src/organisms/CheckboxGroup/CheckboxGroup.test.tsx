import React from 'react'
import { it, describe, expect } from 'vitest'
import { axe } from 'jest-axe'
import { render, screen } from '@testing-library/react'

import CheckboxGroup from './CheckboxGroup'

describe('./src/atoms/CheckboxGroup', () => {
  const items = [
    { checked: false, label: 'Label - 1', id: 'checkbox1', name: 'checkbox1' },
    { checked: false, label: 'Label - 2', id: 'checkbox2', name: 'checkbox2' }
  ]
  it('Should render the component', () => {
    render(<CheckboxGroup id="teste" items={items} title="teste" />)
    const label1 = screen.getByLabelText('Label - 1')
    const label2 = screen.getByLabelText('Label - 2')
    expect(label1).toBeInTheDocument()
    expect(label2).toBeInTheDocument()
  })
  it('Should not have basic a11y issues', async () => {
    const { container } = render(
      <CheckboxGroup id="teste" items={items} title="teste" />
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
