import { axe } from 'jest-axe'
import { it, describe, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { screen, render as tlRender } from '@testing-library/react'
import { CloseButton } from './CloseButton'
import { Disclosure } from './Disclosure'

interface RenderProps {
  onClick?: () => void
  onChange?: () => void
  'aria-label'?: string
}

const render = ({ onChange, ...props }: RenderProps = {}) =>
  tlRender(
    <Disclosure id="testing-close-button" onChange={onChange}>
      <CloseButton>
        <button {...props}>click-me</button>
      </CloseButton>
    </Disclosure>
  )

describe('atoms/Disclosure/CloseButton', () => {
  it('should not have a11y issues', () => {
    const { container } = render()
    return expect(axe(container)).resolves.toHaveNoViolations()
  })

  it('should apply disclosure pattern roles', async () => {
    render()
    const button = await screen.getByText('click-me')
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).toHaveAttribute('aria-controls', 'testing-close-button')
    expect(button).toHaveAttribute('aria-label', 'Fecha o menu lateral')
    expect(button).toHaveAttribute('tabindex', '0')
  })

  it('should call click callback', async () => {
    const onClick = vi.fn()
    render({ onClick, 'aria-label': 'close menu' })
    const button = await screen.findByRole('button', { name: 'close menu' })
    userEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
