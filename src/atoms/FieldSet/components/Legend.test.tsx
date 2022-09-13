import React from 'react'
import { it, describe, expect } from 'vitest'
import { axe } from 'jest-axe'
import FieldSet from '../FieldSet'
import Legend from './Legend'
import { render as rtlRender, screen } from '@testing-library/react'
import { LegendProps } from './Legend.types'

const defaultProps = {
  children: 'content'
} as LegendProps

const render = (props: LegendProps = defaultProps) =>
  rtlRender(
    <FieldSet>
      <Legend {...props} />
    </FieldSet>
  )

describe('atoms/FieldSet/Legend', () => {
  it('should render component', () => {
    render()

    expect(
      screen.queryByRole('group', { name: defaultProps.children as string })
    ).toBeInTheDocument()
  })

  it('should not have have basic accessibility issues', async () => {
    const { container } = render()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
