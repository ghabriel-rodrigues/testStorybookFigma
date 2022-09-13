import { forwardRef } from 'react'
import styled from 'styled-components'
import { HorizontalListItemProps } from './HorizontalListItem.types'
import { WrapperCSS } from './HorizontalListItem.styles'

const Wrapper = styled.li`
  ${WrapperCSS}
`

const HorizontalListItem: React.FC<HorizontalListItemProps> = forwardRef<
  HTMLLIElement,
  HorizontalListItemProps
>(({ children, ...props }, ref) => {
  return (
    <Wrapper ref={ref} {...props}>
      {children}
    </Wrapper>
  )
})

export default HorizontalListItem
