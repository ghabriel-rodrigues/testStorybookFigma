import React from 'react'
import { it, describe, expect } from 'vitest'
import { axe } from 'jest-axe'
import { render, screen } from '@testing-library/react'

import CheckboxLabel from './CheckboxLabel'

describe('./src/atoms/CheckboxLabel', () => {
  it('Should render the component', () => {
    render(<CheckboxLabel id="teste" label="teste" title="teste" />)
    const label = screen.getByLabelText('teste')
    expect(label).toBeInTheDocument()
  })
  it('Should not have basic a11y issues', async () => {
    const { container } = render(
      <CheckboxLabel id="teste" label="teste" title="teste" />
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
