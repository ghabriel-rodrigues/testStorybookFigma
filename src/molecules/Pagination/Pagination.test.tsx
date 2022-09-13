import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import Pagination from './Pagination'
import { vi } from 'vitest'
import userEvent from '@testing-library/user-event'

const aria = {
  ariaLabelPagination: 'Paginação do resultado da busca',
  ariaLabelPageButton: 'Vá para página',
  ariaLabelNextButton: 'Vá para próxima página',
  ariaLabelPrevButton: 'Vá para página anterior'
}

describe('Pagination', () => {
  it('should not have have basic accessibility issues', async () => {
    const { container } = render(
      <Pagination {...aria} initialPage={1} totalPages={3} />
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  describe('When user is in page 0 of 3', () => {
    beforeEach(() => {
      render(<Pagination {...aria} initialPage={1} totalPages={3} />)
    })

    it('should have previous button disabled', async () => {
      const previousButton = await screen.findByTestId('pagination-prev-button')
      expect(previousButton).toBeDisabled()
    })

    it('should have next button selectable', async () => {
      const nextPageButton = await screen.findByTestId('pagination-next-button')
      expect(nextPageButton).not.toBeDisabled()
    })

    it('should have 3 PageButtons', async () => {
      const pageButtons = await screen.queryAllByTestId(
        'pagination-page-button'
      )
      expect(pageButtons).toHaveLength(3)
    })
  })

  describe('When user is in page 2 of 5', () => {
    beforeEach(() => {
      render(<Pagination {...aria} initialPage={2} totalPages={5} />)
    })

    it('should have Previous Button and Next Button selectable', async () => {
      const previousButton = await screen.findByTestId('pagination-prev-button')
      const nextPageButton = await screen.findByTestId('pagination-next-button')
      expect(previousButton).not.toBeDisabled()
      expect(nextPageButton).not.toBeDisabled()
    })

    it('should have 3 Page Buttons', async () => {
      const pageButtons = await screen.queryAllByTestId(
        'pagination-page-button'
      )
      expect(pageButtons).toHaveLength(3)
    })

    it('should Page Button 2 have aria-current prop equal true', () => {
      const pageButton = screen.getByRole('button', { current: true })
      expect(pageButton).toHaveAccessibleName('Vá para página 2')
    })
  })

  describe('When user is in page 32 of 32', () => {
    const fakePageFn = vi.fn()
    beforeEach(() => {
      render(
        <Pagination
          {...aria}
          initialPage={32}
          totalPages={32}
          onPageChange={fakePageFn}
        />
      )
    })
    afterEach(() => {
      fakePageFn.mockClear()
    })

    it('should have 3 Page Buttons', async () => {
      const pageButtons = await screen.queryAllByTestId(
        'pagination-page-button'
      )
      expect(pageButtons).toHaveLength(3)
    })

    it('should have Previous Button selectable', async () => {
      const previousButton = await screen.findByTestId('pagination-prev-button')
      expect(previousButton).not.toBeDisabled()
    })

    it('should have Next Button disabled', async () => {
      const nextPageButton = await screen.findByTestId('pagination-next-button')
      expect(nextPageButton).toBeDisabled()
    })

    it('should call function when click previous page button', async () => {
      const previousButton = await screen.findByTestId('pagination-prev-button')
      userEvent.click(previousButton)
      expect(fakePageFn).toHaveBeenLastCalledWith(31)
    })
  })

  describe('When user is in page 1 of 1', () => {
    beforeEach(() => {
      render(<Pagination {...aria} initialPage={1} totalPages={1} />)
    })

    it('should have 1 Page Button', async () => {
      const pageButtons = await screen.queryAllByTestId(
        'pagination-page-button'
      )
      expect(pageButtons).toHaveLength(1)
    })

    it('should have Previous Button disabled', async () => {
      const previousButton = await screen.findByTestId('pagination-prev-button')
      expect(previousButton).toBeDisabled()
    })

    it('should have Next Button disabled', async () => {
      const nextPageButton = await screen.findByTestId('pagination-next-button')
      expect(nextPageButton).toBeDisabled()
    })

    it('should Page Button 1 have aria-current prop equal true', () => {
      const pageButton = screen.getByRole('button', { current: true })
      expect(pageButton).toHaveAccessibleName('Vá para página 1')
    })
  })

  describe('When user is in page 1 of 2', () => {
    beforeEach(() => {
      render(<Pagination {...aria} initialPage={1} totalPages={2} />)
    })

    it('should have 2 Page Button', async () => {
      const pageButtons = await screen.queryAllByTestId(
        'pagination-page-button'
      )
      expect(pageButtons).toHaveLength(2)
    })

    it('should have Previous Button disabled', async () => {
      const previousButton = await screen.findByTestId('pagination-prev-button')
      expect(previousButton).toBeDisabled()
    })

    it('should have Next Button enabled', async () => {
      const nextPageButton = await screen.findByTestId('pagination-next-button')
      expect(nextPageButton).not.toBeDisabled()
    })

    it('should Page Button 1 have aria-current prop equal true', () => {
      const pageButton = screen.getByRole('button', { current: true })
      expect(pageButton).toHaveAccessibleName('Vá para página 1')
    })
  })
})
