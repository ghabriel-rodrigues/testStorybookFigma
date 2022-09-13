import React from 'react'
import { it, describe, expect } from 'vitest'
import { axe } from 'jest-axe'
import { render, screen } from '@testing-library/react'

import Heading from './Heading'

describe('./src/atoms/Heading', () => {
  it('should render the content inside component', () => {
    render(<Heading variant="h1">My Heading Here</Heading>)
    expect(screen.getByText('My Heading Here')).toBeInTheDocument()
  })

  it('should not have have basic accessibility issues', async () => {
    const { container } = render(
      <Heading variant="h1">My Heading Here</Heading>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  describe('variants', () => {
    it('should render H1 tag when variant is h1', async () => {
      const { getByRole } = render(
        <Heading variant="h1">My Heading Here</Heading>
      )
      expect(getByRole('heading', { level: 1 })).toBeInTheDocument()
    })
    it('should render H2 tag when variant is h2', async () => {
      const { getByRole } = render(
        <Heading variant="h2">My Heading Here</Heading>
      )
      expect(getByRole('heading', { level: 2 })).toBeInTheDocument()
    })
    it('should render H3 tag when variant is h3', async () => {
      const { getByRole } = render(
        <Heading variant="h3">My Heading Here</Heading>
      )
      expect(getByRole('heading', { level: 3 })).toBeInTheDocument()
    })

    it('should render H4 tag when variant is h4', async () => {
      const { getByRole } = render(
        <Heading variant="h4">My Heading Here</Heading>
      )
      expect(getByRole('heading', { level: 4 })).toBeInTheDocument()
    })
  })
})
