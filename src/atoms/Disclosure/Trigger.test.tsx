import { axe } from 'jest-axe'
import { it, describe, expect } from 'vitest'
import { render as tlRender } from '@testing-library/react'
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

describe('atoms/Disclosure/Trigger', () => {
  it('should not have a11y issues', () => {
    const { container } = render()
    return expect(axe(container)).resolves.toHaveNoViolations()
  })
})
