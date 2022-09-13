import { render as rtlRender, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { DirectionButton } from './DirectionButton'
import { DirectionButtonProps } from './DirectionButton.types'

const defaultProps = {
  direction: 'left',
  'data-testid': 'tested-element'
} as DirectionButtonProps

const render = (props: DirectionButtonProps = defaultProps) =>
  rtlRender(<DirectionButton {...props} />)

describe('molecule/HorizontalList/DirectionButton', () => {
  it('should render component', () => {
    render()

    // because it has aria-hidden=true, it cannot be tested using getByRole('button')
    expect(screen.queryByTestId('tested-element')).toBeInTheDocument()
  })

  it('should not have a11y issues', () => {
    const { container } = render()

    expect(axe(container)).resolves.toHaveNoViolations()
  })
})
