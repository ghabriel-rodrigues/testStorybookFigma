import { axe } from 'jest-axe'
import { it, describe, expect } from 'vitest'
import { RenderResult, render as tlRender } from '@testing-library/react'
import { Avatar } from './Avatar'

const render = (): RenderResult =>
  tlRender(<Avatar src="http://domain.com/path/image.png" />)

describe('atoms/Avatar', () => {
  it('should not have a11y issues', () => {
    const { container } = render()
    return expect(axe(container)).resolves.toHaveNoViolations()
  })
})
