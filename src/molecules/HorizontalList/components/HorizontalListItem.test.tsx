import { HorizontalListItemProps } from './HorizontalListItem.types'
import HorizontalListItem from './HorizontalListItem'
import { render as rtlRender, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

const defaultProps = {
  'aria-label': 'Link para página de carreira da Empresa 1',
  children: (
    <a href="https://www.gupy.io/" rel="noreferrer">
      <h1>Empresa 1</h1>
    </a>
  )
}

const render = (props: HorizontalListItemProps = defaultProps) =>
  rtlRender(<HorizontalListItem {...props} />)

const renderWithParent = (props: HorizontalListItemProps = defaultProps) =>
  rtlRender(
    <ol>
      <HorizontalListItem {...props} />
    </ol>
  )

describe('molecule/HorizontalList/HorizontalListItem', () => {
  it('should render component', () => {
    render()

    expect(screen.queryByRole('listitem')).toBeInTheDocument()
  })

  it('should not have a11y issues', () => {
    const { container } = renderWithParent()

    expect(axe(container)).resolves.toHaveNoViolations()
  })
})
