import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styled, { css } from 'styled-components'

import Icon from '@/atoms/Icon/Icon'
import { IconType } from '@/atoms/Icon/enums'
import {
  ButtonCSS,
  ItemBaseCSS,
  ListBaseCSS,
  NavigationButtonCSS,
  PageButtonCSS
} from './Pagination.styles'
import { modifiers } from './Modifiers'

interface PaginationProps {
  initialPage: number
  totalPages: number
  ariaLabelPagination: string
  ariaLabelPageButton: string
  ariaLabelNextButton: string
  ariaLabelPrevButton: string
  onPageChange?: (page: number) => void
}

const ListBase = styled.ul`
  ${ListBaseCSS}
`

const ItemBase = styled.li`
  ${ItemBaseCSS}
`

const PageButton = styled.button`
  ${ButtonCSS}
  ${modifiers}
  ${PageButtonCSS}
`

const NavigationButton = styled.button`
  ${ButtonCSS}
  ${NavigationButtonCSS}
`

const Pagination: React.FC<PaginationProps> = ({
  initialPage = 0,
  totalPages = 0,
  ariaLabelPagination,
  ariaLabelPageButton,
  ariaLabelNextButton,
  ariaLabelPrevButton,
  onPageChange
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage)
  const [pages, setPages] = useState<number[]>([])
  const [isFirstPage, setIsFirstPage] = useState(false)
  const [isLastPage, setIsLastPage] = useState(false)

  useEffect(() => {
    setCurrentPage(initialPage)
  }, [initialPage])

  useEffect(() => {
    setIsLastPage(currentPage >= totalPages)
    setIsFirstPage(currentPage <= 1)
    setPages(() => {
      const start = Math.max(1, currentPage - 1)
      const end = Math.min(totalPages, currentPage + 1)
      return Array(totalPages > 2 ? 3 : end - start + 1)
        .fill(0)
        .map(
          (_, idx) =>
            (totalPages > 2 && currentPage === end ? -1 : 0) + start + idx
        )
    })
    if (onPageChange) onPageChange(currentPage)
  }, [currentPage, totalPages, onPageChange])

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page)
  }, [])

  if (initialPage > totalPages) return null

  return (
    <nav aria-label={ariaLabelPagination}>
      <ListBase>
        <ItemBase>
          <NavigationButton
            data-testid="pagination-prev-button"
            aria-disabled={isFirstPage}
            disabled={isFirstPage}
            onClick={() => handlePageChange(currentPage - 1)}
            aria-label={ariaLabelPrevButton}
          >
            <Icon type={IconType.ChevronLeft} />
          </NavigationButton>
        </ItemBase>
        {pages.map((page) => (
          <ItemBase key={page}>
            <PageButton
              data-testid="pagination-page-button"
              aria-label={`${ariaLabelPageButton} ${page}`}
              aria-current={currentPage === page}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </PageButton>
          </ItemBase>
        ))}
        <ItemBase>
          <NavigationButton
            data-testid="pagination-next-button"
            aria-disabled={isLastPage}
            disabled={isLastPage}
            onClick={() => handlePageChange(currentPage + 1)}
            aria-label={ariaLabelNextButton}
          >
            <Icon type={IconType.ChevronRight} />
          </NavigationButton>
        </ItemBase>
      </ListBase>
    </nav>
  )
}

export default Pagination
