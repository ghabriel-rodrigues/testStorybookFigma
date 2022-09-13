import { useCallback, useEffect, useRef, useState } from 'react'

const useCustomScrollBar = (scrollRef: React.RefObject<HTMLOListElement>) => {
  const scrollBarRef = useRef<HTMLDivElement>(null)
  const scrollBarThumbRef = useRef<HTMLDivElement>(null)
  const [scrollThumbWidth, setScrollThumbWidth] = useState('0px')

  const [isFirstItem, setIsFirstItem] = useState(true)
  const [isLastItem, setIsLastItem] = useState(false)

  const calculateAndSetScrollThumbWidth = useCallback(() => {
    const scrollElement = scrollRef.current
    const scrollBarElement = scrollBarRef.current
    let response = 0

    if (scrollElement && scrollBarElement && typeof window !== 'undefined') {
      const thumbWidth =
        (scrollElement.clientWidth / scrollElement.scrollWidth) *
        scrollElement.clientWidth
      const proportion =
        scrollBarElement.clientWidth / scrollElement.clientWidth

      response = thumbWidth * proportion
    }
    setScrollThumbWidth(`${response}px`)
  }, [scrollRef])

  const moveScrollThumb = useCallback(() => {
    const scrollElement = scrollRef.current
    const scrollBarElement = scrollBarRef.current
    const scrollBarThumbElement = scrollBarThumbRef.current

    if (!scrollElement) return

    if (scrollBarThumbElement && scrollBarElement) {
      const proportion =
        scrollBarElement.clientWidth / scrollElement.clientWidth

      const scrollThumbTranslationStep =
        (scrollElement.scrollLeft / scrollElement.scrollWidth) *
        scrollElement.clientWidth

      // move thumb inside scroll
      scrollBarThumbElement.style.transform = `translateX(${
        scrollThumbTranslationStep * proportion
      }px)`
    }
  }, [scrollRef])

  const changeDirectionButtonsState = useCallback(() => {
    const scrollElement = scrollRef.current
    if (!scrollElement) return

    if (scrollElement.scrollLeft === 0) {
      setIsFirstItem(true)
    } else {
      setIsFirstItem(false)
    }

    if (
      scrollElement.scrollLeft ===
      scrollElement.scrollWidth - scrollElement.clientWidth
    ) {
      setIsLastItem(true)
    } else {
      setIsLastItem(false)
    }
  }, [scrollRef])

  const onScroll = useCallback(() => {
    moveScrollThumb()

    changeDirectionButtonsState()
  }, [changeDirectionButtonsState, moveScrollThumb])

  useEffect(() => {
    window.addEventListener('resize', calculateAndSetScrollThumbWidth)
    window.addEventListener('resize', changeDirectionButtonsState)

    return () => {
      window.removeEventListener('resize', calculateAndSetScrollThumbWidth)
      window.removeEventListener('resize', changeDirectionButtonsState)
    }
  }, [calculateAndSetScrollThumbWidth, changeDirectionButtonsState])

  useEffect(() => {
    calculateAndSetScrollThumbWidth()
    changeDirectionButtonsState()
  }, [calculateAndSetScrollThumbWidth, changeDirectionButtonsState])

  return {
    isFirstItem,
    isLastItem,
    scrollBarRef,
    scrollBarThumbRef,
    onScroll,
    scrollThumbWidth,
    calculateAndSetScrollThumbWidth,
    changeDirectionButtonsState
  }
}
export default useCustomScrollBar
