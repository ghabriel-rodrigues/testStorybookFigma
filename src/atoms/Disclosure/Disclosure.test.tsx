import { axe } from 'jest-axe'
import { it, describe, expect, vi } from 'vitest'
import { screen, render as tlRender } from '@testing-library/react'
import { Trigger } from './Trigger'
import { Disclosure } from './Disclosure'
import userEvent from '@testing-library/user-event'

interface RenderProps {
  onClick?: () => void
  onChange?: () => void
  'aria-label'?: string
}

const render = ({ onChange, ...props }: RenderProps = {}) =>
  tlRender(
    <Disclosure id="testing-close-button" onChange={onChange}>
      <Trigger>
        <button {...props}>click-me</button>
      </Trigger>
    </Disclosure>
  )

describe('atoms/Disclosure/Disclosure', () => {
  it('should not have a11y issues', () => {
    const { container } = render()
    return expect(axe(container)).resolves.toHaveNoViolations()
  })

  it('should call change callback', async () => {
    const onChange = vi.fn()
    render({ onChange, 'aria-label': 'Open' })
    const button = await screen.findByRole('button', { name: 'Open' })
    userEvent.click(button)
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
