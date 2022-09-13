import React from 'react'
import { it, describe, expect } from 'vitest'
import { axe } from 'jest-axe'
import { getByRole, render as rtlRender, screen } from '@testing-library/react'

import RadioButton from './RadioButton'
import userEvent from '@testing-library/user-event'
import { useRadioGroup } from '@/organisms/RadioGroup/context/RadioGroup.hooks'
import { RadioGroupProvider } from '@/organisms/RadioGroup/context/RadioGroup.provider'

const Component = () => {
  const { state } = useRadioGroup({
    name: 'test-name'
  })

  return (
    <RadioGroupProvider value={state}>
      <RadioButton label="Teste" id="test-id" value="test-value" />
    </RadioGroupProvider>
  )
}

const render = () => rtlRender(<Component />)

describe('./src/atoms/RadioButton', () => {
  it('Should render the component', () => {
    render()
    const label = screen.getByLabelText('Teste')
    expect(label).toBeInTheDocument()
  })

  it('should mark correctly a radio label as checked', () => {
    const { container } = render()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const radio = getByRole(container, 'radio') as any
    userEvent.click(radio)
    expect(radio.checked).toBe(true)
  })

  it('Should not have basic a11y issues', async () => {
    const { container } = render()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
