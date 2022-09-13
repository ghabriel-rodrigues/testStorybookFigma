import React from 'react'

export interface DisclosureContextValue {
  id?: string
  closable?: boolean
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

export const DisclosureContext = React.createContext<DisclosureContextValue>({
  isOpen: false,
  closable: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  open: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  close: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggle: () => {}
})
