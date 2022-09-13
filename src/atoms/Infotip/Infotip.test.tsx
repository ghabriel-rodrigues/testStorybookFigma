import React from 'react'
import { it, describe, expect } from 'vitest'
import { axe } from 'jest-axe'
import { render, screen } from '@testing-library/react'

import Infotip from './Infotip'

describe('./src/atoms/Infotip', () => {
  it('should render the content inside component', () => {
    render(<Infotip tooltipText="tooltip">My Infotip Here</Infotip>)
    expect(screen.getByText('My Infotip Here')).toBeInTheDocument()
  })

  it('should not have have basic accessibility issues', async () => {
    const { container } = render(
      <Infotip tooltipText="tooltip">My Infotip Here</Infotip>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
