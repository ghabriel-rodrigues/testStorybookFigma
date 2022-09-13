import React from 'react'
import { DisclosureContext } from './Context'

export const useDisclosure = () => React.useContext(DisclosureContext)

enum DisclosureState {
  CLOSING = 'closing',
  OPENING = 'opening'
}

export interface DisclosureProps {
  id: string
  closable?: boolean
  open?: boolean
  onChange?: (state: DisclosureState | string) => void
}

export const Disclosure: React.FC<DisclosureProps> = ({
  id,
  open,
  closable = true,
  children,
  onChange
}) => {
  const [isOpen, setIsOpen] = React.useState(Boolean(open))

  const on = React.useCallback(() => {
    setIsOpen(true)
    onChange?.(DisclosureState.OPENING)
  }, [setIsOpen])

  const off = React.useCallback(() => {
    setIsOpen(false)
    onChange?.(DisclosureState.CLOSING)
  }, [setIsOpen])

  const toggle = React.useCallback(() => {
    setIsOpen((state) => !state)
    onChange?.(isOpen ? DisclosureState.CLOSING : DisclosureState.OPENING)
  }, [setIsOpen])

  const context = React.useMemo(
    () => ({
      id,
      closable,
      isOpen,
      open: on,
      close: off,
      toggle
    }),
    [id, isOpen, toggle]
  )

  return (
    <DisclosureContext.Provider value={context}>
      {children}
    </DisclosureContext.Provider>
  )
}
