import { axe } from 'jest-axe'
import { it, describe, expect } from 'vitest'
import { screen, render as tlRender } from '@testing-library/react'
import { Target } from './Target'
import { Trigger } from './Trigger'
import { CloseButton } from './CloseButton'
import { Disclosure } from './Disclosure'
import userEvent from '@testing-library/user-event'

interface RenderProps {
  onClick?: () => void
  onChange?: () => void
  open?: boolean
  'aria-label'?: string
}

const render = ({ open, onChange, ...props }: RenderProps = {}) =>
  tlRender(
    <Disclosure id="testing-close-button" open={open} onChange={onChange}>
      <Trigger>
        <button aria-label="Open">here!</button>
      </Trigger>
      <Target>
        <div data-testid="disclosure-target">
          <CloseButton>
            <button {...props}>click-me</button>
          </CloseButton>
          <p>main content here!</p>
        </div>
      </Target>
    </Disclosure>
  )

describe('atoms/Disclosure/Target', () => {
  it('should not have a11y issues', () => {
    const { container } = render()
    return expect(axe(container)).resolves.toHaveNoViolations()
  })

  it('should apply disclosure pattern roles', async () => {
    render()
    const target = await screen.findByTestId('disclosure-target')

    expect(target).toHaveAttribute('id', 'testing-close-button')
    expect(target).toHaveAttribute('aria-hidden', 'true')
  })

  it('should close target via escape key', async () => {
    render({ open: true })
    userEvent.keyboard('{esc}')

    const target = await screen.findByTestId('disclosure-target')
    expect(target).toHaveAttribute('aria-hidden', 'false')
  })
})
