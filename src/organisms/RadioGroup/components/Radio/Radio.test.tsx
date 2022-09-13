/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { getByRole, render as rtlRender } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'

import { useRadioGroup } from '@/organisms/RadioGroup/context/RadioGroup.hooks'
import { RadioGroupProvider } from '@/organisms/RadioGroup/context/RadioGroup.provider'
import Radio from './Radio'

const Component = () => {
  const { state } = useRadioGroup({
    name: 'test-name'
  })

  return (
    <RadioGroupProvider value={state}>
      <label htmlFor="test-id">
        <span aria-hidden>Teste</span>
        <Radio id="test-id" aria-label="Valor teste" value="test-value" />
      </label>
    </RadioGroupProvider>
  )
}

const render = () => rtlRender(<Component />)

describe('./src/atoms/Radio', () => {
  it('should render the content inside the component', () => {
    const { container } = render()

    expect(container).toBeInTheDocument()
  })

  it('should mark correctly a radio as checked', () => {
    const { container } = render()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const radio = getByRole(container, 'radio') as any
    userEvent.click(radio)
    expect(radio.checked).toBe(true)
  })

  it('should not have have basic accessibility issues', async () => {
    const { container } = render()

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
