import React from 'react'
import useConditionalFocus from '@accessible/use-conditional-focus'
import useMergedRef from '@react-hook/merged-ref'
import usePrevious from '@react-hook/previous'
import useKey from '@accessible/use-key'
import { useDisclosure } from './Disclosure'

export interface UseA11yTargetProps {
  closeOnEscape?: boolean
}

export const useA11yTarget = <T extends HTMLElement>(
  target: React.RefObject<T> | T | null,
  { closeOnEscape = true }: UseA11yTargetProps
) => {
  const { id, isOpen, close } = useDisclosure()
  const prevOpen = usePrevious(isOpen)

  useConditionalFocus(target, !prevOpen && isOpen, { includeRoot: true })
  useKey(target, { escape: () => closeOnEscape && close() })

  return { id, 'aria-hidden': !isOpen }
}

export interface TargetProps {
  closeOnEscape?: boolean
}

export const Target: React.FC<TargetProps> = ({ closeOnEscape, children }) => {
  const ref = React.useRef<HTMLElement>(null)
  const a11yProps = useA11yTarget(ref, { closeOnEscape })
  return React.cloneElement(
    children as React.ReactElement,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    Object.assign(a11yProps, { ref: useMergedRef(ref, children.ref) })
  )
}
