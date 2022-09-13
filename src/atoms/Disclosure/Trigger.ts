import React from 'react'
import useConditionalFocus from '@accessible/use-conditional-focus'
import { useA11yButton } from '@accessible/button'
import useMergedRef from '@react-hook/merged-ref'
import usePrevious from '@react-hook/previous'
import { useDisclosure } from './Disclosure'

export interface UseA11yTriggerOptions {
  onClick?: EventListener
}

export const useA11yTrigger = <T extends HTMLElement>(
  target: React.RefObject<T> | T | null,
  { onClick }: UseA11yTriggerOptions = {}
) => {
  const { id, isOpen, toggle } = useDisclosure()
  const prevOpen = usePrevious(isOpen)

  useConditionalFocus(target, prevOpen && !isOpen, { includeRoot: true })

  return Object.assign(
    {
      'aria-controls': id,
      'aria-expanded': Boolean(isOpen)
    } as const,
    useA11yButton<T>(target, (event) => {
      toggle()
      onClick?.(event)
    })
  )
}

export const Trigger: React.FC = ({ children }) => {
  const ref = React.useRef<HTMLElement>(null)
  const childProps = children ? (children as React.ReactElement).props : {}
  const a11yProps = useA11yTrigger(ref, { onClick: childProps.onClick })

  return React.cloneElement(
    children as React.ReactElement,
    Object.assign(a11yProps, {
      onClick: undefined,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      ref: useMergedRef(ref, children.ref)
    })
  )
}
