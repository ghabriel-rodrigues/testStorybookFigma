import React from 'react'
import { it, describe, expect } from 'vitest'
import { axe } from 'jest-axe'
import { render } from '@testing-library/react'

import Checkbox from './Checkbox'

describe('./src/atoms/Checkbox', () => {
  it('Should render the component', () => {
    const { container } = render(
      <Checkbox id="teste" aria-label="teste" title="teste" />
    )
    expect(container).toBeInTheDocument()
  })
  it('Should not have basic a11y issues', async () => {
    const { container } = render(
      <Checkbox id="teste" aria-label="teste" title="teste" />
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
