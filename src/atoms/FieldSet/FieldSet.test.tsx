import React from 'react'
import { it, describe, expect } from 'vitest'
import { axe } from 'jest-axe'
import FieldSet from './FieldSet'
import { render as rtlRender, screen } from '@testing-library/react'
import { FieldSetProps } from './FieldSet.types'

const defaultProps = {} as FieldSetProps

const render = (props: FieldSetProps = defaultProps) =>
  rtlRender(<FieldSet {...props} />)

describe('atoms/FieldSet', () => {
  it('should render component', () => {
    render()

    expect(screen.queryByRole('group')).toBeInTheDocument()
  })

  it('should not have have basic accessibility issues', async () => {
    const { container } = render()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
