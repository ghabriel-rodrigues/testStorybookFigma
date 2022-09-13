import { useCallback } from 'react'
import { DirectionButtonProps } from './components/DirectionButton.types'

const useDirectionButtonsState = (
  scrollRef: React.RefObject<HTMLOListElement>,
  childrenRef: React.MutableRefObject<HTMLElement[]>,
  props?: DirectionButtonProps
) => {
  const scrollToPrev = useCallback(
    (...args: Parameters<NonNullable<DirectionButtonProps['onClick']>>) => {
      const [event, customProps] = args
      if (scrollRef.current && childrenRef.current?.[0]) {
        scrollRef.current.scrollLeft -= childrenRef.current[0].clientWidth
        props?.onClick?.(event, customProps)
      }
    },
    [childrenRef, scrollRef]
  )

  const scrollToNext = useCallback(
    (...args: Parameters<NonNullable<DirectionButtonProps['onClick']>>) => {
      const [event, customProps] = args
      if (scrollRef.current && childrenRef.current?.[0]) {
        scrollRef.current.scrollLeft += childrenRef.current[0].clientWidth
        props?.onClick?.(event, customProps)
      }
    },
    [childrenRef, scrollRef]
  )

  return {
    scrollToPrev,
    scrollToNext
  }
}

export default useDirectionButtonsState
