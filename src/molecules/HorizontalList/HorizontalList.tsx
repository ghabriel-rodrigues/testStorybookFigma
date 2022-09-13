import React, { useCallback, useRef } from 'react'
import styled from 'styled-components'
import { DirectionButton } from './components/DirectionButton'
import {
  DirectionButtonsWrapperCSS,
  GreaterThanSmCSS,
  RemoveDefaultScrollBar,
  ScrollCSS,
  ScrollThumbCSS,
  ScrollWrapperCSS,
  WithScrollbarWrapperCSS,
  WrapperCSS
} from './HorizontalList.styles'
import { HorizontalListProps } from './HorizontalList.types'
import useCustomScrollBar from './use-custom-scroll-bar'
import useDirectionButtonsState from './use-direction-buttons-state'

const Wrapper = styled.div`
  ${WrapperCSS}
`

const GreaterThanSm = styled.div`
  ${GreaterThanSmCSS}
`

const WithScrollbarWrapper = styled.div`
  ${WithScrollbarWrapperCSS}
`

const ScrollWrapper = styled.ol`
  ${ScrollWrapperCSS}
  ${RemoveDefaultScrollBar}
`

const DirectionButtonsWrapper = styled.div`
  ${DirectionButtonsWrapperCSS}
`

const Scroll = styled.div`
  ${ScrollCSS}
`

const ScrollThumb = styled.div<{ width: string }>`
  ${ScrollThumbCSS}
  width: ${({ width }) => width};
`

const HorizontalList: React.FC<HorizontalListProps> = ({
  children,
  ...props
}) => {
  const { directionButtonProps, ...scrollProps } = props
  const childrenRef = useRef<HTMLElement[]>([])
  const scrollRef = useRef<HTMLOListElement>(null)
  const scrollBarMobile = useCustomScrollBar(scrollRef)
  const scrollBarDesktop = useCustomScrollBar(scrollRef)
  const { scrollToPrev, scrollToNext } = useDirectionButtonsState(
    scrollRef,
    childrenRef,
    directionButtonProps
  )

  const onScroll = useCallback(
    (e: React.UIEvent<HTMLOListElement, UIEvent>) => {
      scrollBarDesktop.onScroll()
      scrollBarMobile.onScroll()
      scrollProps.onScroll?.(e)
    },
    []
  )

  const renderChildren = useCallback(
    () =>
      React.Children.map(children, (child, index) =>
        React.cloneElement(child as any, {
          ref: (el: HTMLLIElement) => (childrenRef.current[index] = el)
        })
      ),
    [children]
  )

  return (
    <Wrapper>
      <GreaterThanSm>
        <DirectionButton
          direction="left"
          disabled={scrollBarDesktop.isFirstItem}
          onClick={scrollToPrev}
        />
      </GreaterThanSm>
      <WithScrollbarWrapper>
        <ScrollWrapper ref={scrollRef} {...scrollProps} onScroll={onScroll}>
          {renderChildren()}
        </ScrollWrapper>
        <GreaterThanSm>
          <Scroll aria-hidden ref={scrollBarDesktop.scrollBarRef}>
            <ScrollThumb
              width={scrollBarDesktop.scrollThumbWidth}
              ref={scrollBarDesktop.scrollBarThumbRef}
            />
          </Scroll>
        </GreaterThanSm>
      </WithScrollbarWrapper>
      <GreaterThanSm>
        <DirectionButton
          direction="right"
          disabled={scrollBarDesktop.isLastItem}
          onClick={scrollToNext}
        />
      </GreaterThanSm>

      <DirectionButtonsWrapper>
        <DirectionButton
          direction="left"
          disabled={scrollBarMobile.isFirstItem}
          onClick={scrollToPrev}
        />
        <Scroll aria-hidden ref={scrollBarMobile.scrollBarRef}>
          <ScrollThumb
            width={scrollBarMobile.scrollThumbWidth}
            ref={scrollBarMobile.scrollBarThumbRef}
          />
        </Scroll>
        <DirectionButton
          direction="right"
          disabled={scrollBarMobile.isLastItem}
          onClick={scrollToNext}
        />
      </DirectionButtonsWrapper>
    </Wrapper>
  )
}

export default HorizontalList
