import React from 'react'
import { axe } from 'jest-axe'
import { it, describe, expect } from 'vitest'
import {
  screen,
  RenderResult,
  render as tlRender
} from '@testing-library/react'

import Card from './Card'

const render = (): RenderResult => tlRender(<Card>card content</Card>)

describe('./src/atoms/Card', () => {
  it('should render content', () => {
    render()
    return expect(
      screen.findByText('card content')
    ).resolves.toBeInTheDocument()
  })

  it('should not have a11y issues', () => {
    const { container } = render()
    return expect(axe(container)).resolves.toHaveNoViolations()
  })
})
