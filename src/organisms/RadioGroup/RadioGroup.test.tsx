/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import { it, describe, expect } from 'vitest'
import { axe } from 'jest-axe'
import { render, screen } from '@testing-library/react'

import RadioGroup from './RadioGroup'
import { RadioGroupProps } from './RadioGroup.types'

const defaultProps = {
  label: 'Radio group',
  'data-testid': 'radioGroup',
  name: 'radio',
  items: [
    {
      label: 'Label - 1',
      id: 'radio1',
      value: 'a'
    },
    {
      label: 'Label - 2',
      id: 'radio2',
      value: 'b'
    }
  ]
} as RadioGroupProps

const create = (props: RadioGroupProps = defaultProps) =>
  render(<RadioGroup {...props} />)

describe('./src/organisms/RadioGroup', () => {
  //@TODO: To create functional tests to check radio states as checked and non-checked.
  // https://gupy-io.atlassian.net/browse/PDEV-103
  it('Should render the component', () => {
    create()
    const label1 = screen.getByLabelText('Label - 1')
    const label2 = screen.getByLabelText('Label - 2')
    expect(label1).toBeInTheDocument()
    expect(label2).toBeInTheDocument()
  })

  it('Should not have basic a11y issues', async () => {
    const { container } = create()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
