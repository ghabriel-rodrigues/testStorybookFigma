import React from 'react'
import { it, describe, expect } from 'vitest'
import { axe } from 'jest-axe'
import { render, screen } from '@testing-library/react'

import Tip from './Tip'
import { TipTypes } from './Tip.types'

describe('./src/atoms/Tip', () => {
  it('should render the content inside component', () => {
    render(<Tip type={TipTypes.hint}>Hint message</Tip>)

    expect(screen.getByText('Hint message')).toBeInTheDocument()
  })

  it('shouldnt have any basic accessibility issues', async () => {
    const { container } = render(<Tip>Tip message</Tip>)

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
