import React from 'react'
import { it, describe, expect } from 'vitest'
import { render as rtlRender, screen } from '@testing-library/react'

import Icon from './Icon'
import { IconType } from './enums'
import { axe } from 'jest-axe'

const render = () => {
  return rtlRender(<Icon type={IconType.AccessTime} testid="accesstime" />)
}

describe('./src/atoms/Icon', () => {
  it('should render according to enum', () => {
    render()
    return expect(
      screen.findByTestId('accesstime')
    ).resolves.toBeInTheDocument()
  })

  it('should not have a11y issues', () => {
    const { container } = render()
    return expect(axe(container)).resolves.toHaveNoViolations()
  })
})
