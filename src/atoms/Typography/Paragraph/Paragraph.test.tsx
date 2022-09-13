import React from 'react'
import { it, describe, expect } from 'vitest'
import { axe } from 'jest-axe'
import { render, screen } from '@testing-library/react'

import Paragraph from './Paragraph'

describe('./src/atoms/Paragraph', () => {
  it('should render the content inside component', () => {
    render(<Paragraph>My Paragraph Here</Paragraph>)
    expect(screen.getByText('My Paragraph Here')).toBeInTheDocument()
  })

  it('should not have have basic accessibility issues', async () => {
    const { container } = render(<Paragraph>My Paragraph Here</Paragraph>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
