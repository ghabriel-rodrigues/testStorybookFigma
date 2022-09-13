import { render as rtlRender, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import HorizontalList from './HorizontalList'
import HorizontalListItem from './components/HorizontalListItem'
import { HorizontalListProps } from './HorizontalList.types'

const LIST_ITEM_AMOUNT = 10

const listItems = [...Array(LIST_ITEM_AMOUNT).keys()].map((item) => (
  <HorizontalListItem key={item}>
    <a href="https://www.gupy.io/" rel="noreferrer">
      <h1>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </h1>
    </a>
  </HorizontalListItem>
))

const defaultProps = {
  'aria-label': 'Habilitar filtros de empresas com selo Gupy',
  children: listItems
}

const render = (props: HorizontalListProps = defaultProps) =>
  rtlRender(<HorizontalList {...props} />)

describe('molecule/HorizontalList', () => {
  it('should render component', () => {
    render()

    expect(screen.queryByRole('list')).toBeInTheDocument()
    expect(screen.queryAllByRole('listitem').length).toEqual(LIST_ITEM_AMOUNT)
  })

  it('should not have a11y issues', () => {
    const { container } = render()

    expect(axe(container)).resolves.toHaveNoViolations()
  })
})
