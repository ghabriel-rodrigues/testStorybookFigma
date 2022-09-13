import React from 'react'
import { it, describe, expect } from 'vitest'
import { axe } from 'jest-axe'
import { render, screen } from '@testing-library/react'

import Grid from './Grid'

describe('./src/atoms/Grid', () => {
  it('should render the content inside component', () => {
    render(<Grid>My Grid Here</Grid>)
    expect(screen.getByText('My Grid Here')).toBeInTheDocument()
  })

  it('should not have have basic accessibility issues', async () => {
    const { container } = render(<Grid>My Grid Here</Grid>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
