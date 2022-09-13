import React from 'react'
import { it, describe, expect } from 'vitest'
import { axe } from 'jest-axe'
import { render, screen } from '@testing-library/react'

import Label from './Label'

describe('./src/atoms/Label', () => {
  it('should render the content inside component', () => {
    render(<Label htmlFor={'id-to-input'}>My Label Here</Label>)

    expect(screen.getByText('My Label Here')).toBeInTheDocument()
  })

  it('should not have have basic accessibility issues', async () => {
    const { container } = render(
      <Label htmlFor={'id-to-input'} hasError={false}>
        My Label Here
      </Label>
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
