import React from 'react'
import { it, describe, expect } from 'vitest'
import { axe } from 'jest-axe'
import { render, screen } from '@testing-library/react'

import InputHelperMessage from './InputHelperMessage'

describe('./src/atoms/InputHelperMessage', () => {
  it('should render the content inside component', () => {
    render(
      <InputHelperMessage id="id-to-input">
        My specific helpful message
      </InputHelperMessage>
    )

    expect(screen.getByText('My specific helpful message')).toBeInTheDocument()
  })

  it('should not have have basic accessibility issues', async () => {
    const { container } = render(
      <InputHelperMessage id="id-to-input" hasError>
        My specific helpful message
      </InputHelperMessage>
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
