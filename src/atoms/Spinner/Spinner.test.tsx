import { axe } from 'jest-axe'
import { it, describe, expect } from 'vitest'
import { render as rtlRender, screen } from '@testing-library/react'
import Spinner, { Props } from './Spinner'

const defaultProps = {
  label: 'carregando informações'
}

const render = (props: Props = defaultProps) =>
  rtlRender(<Spinner {...props} />)

describe('atoms/Spinner', () => {
  it('should render progressbar', () => {
    render()
    return expect(
      screen.findByRole('progressbar', { name: 'carregando informações' })
    ).resolves.toBeInTheDocument()
  })

  it('should not have a11y issues', () => {
    const { container } = render()
    return expect(axe(container)).resolves.toHaveNoViolations()
  })
})
