import React from 'react'
import { useA11yButton } from '@accessible/button'
import useMergedRef from '@react-hook/merged-ref'
import { useDisclosure } from './Disclosure'

export interface UseA11yCloseButtonOptions {
  onClick?: EventListener
}

export const useA11yCloseButton = <T extends HTMLElement>(
  target: React.RefObject<T> | T | null,
  { onClick }: UseA11yCloseButtonOptions = {}
) => {
  const { id, isOpen, close } = useDisclosure()
  return Object.assign(
    {
      'aria-controls': id,
      'aria-expanded': Boolean(isOpen),
      'aria-label': 'Fecha o menu lateral'
    },
    useA11yButton<T>(target, (event) => {
      close()
      onClick?.(event)
    })
  )
}

export const CloseButton: React.FC = ({ children }) => {
  const ref = React.useRef<HTMLElement>(null)
  const childProps = (children as React.ReactElement).props
  const a11yProps = useA11yCloseButton(ref, { onClick: childProps.onClick })
  return React.cloneElement(
    children as React.ReactElement,
    Object.assign(a11yProps, {
      onClick: undefined,
      'aria-label': Object.prototype.hasOwnProperty.call(
        childProps,
        'aria-label'
      )
        ? childProps['aria-label']
        : a11yProps['aria-label'],
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      ref: useMergedRef(ref, children.ref)
    })
  )
}
