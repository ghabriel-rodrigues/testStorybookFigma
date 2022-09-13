import { axe } from 'jest-axe'
import { it, describe, expect } from 'vitest'
import {
  screen,
  RenderResult,
  render as tlRender
} from '@testing-library/react'

import Divisor from './Divisor'

const render = (): RenderResult => tlRender(<Divisor data-testid="divisor" />)

describe('./src/atoms/Divisor', () => {
  it('should render divisor', () => {
    render()
    return expect(screen.findByTestId('divisor')).resolves.toBeInTheDocument()
  })

  it('should not have a11y issues', () => {
    const { container } = render()
    return expect(axe(container)).resolves.toHaveNoViolations()
  })
})
