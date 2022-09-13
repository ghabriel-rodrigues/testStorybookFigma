import React from 'react'
import { useOverlay, DismissButton } from '@react-aria/overlays'
import { FocusScope } from '@react-aria/focus'

interface Props {
  popoverRef: React.RefObject<HTMLDivElement>
  isOpen: boolean
  onClose: () => void
}

export const Popover: React.FC<Props> = (props) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const { popoverRef = ref, isOpen, onClose, children } = props

  const { overlayProps } = useOverlay(
    {
      isOpen,
      onClose,
      shouldCloseOnBlur: false,
      isDismissable: false
    },
    popoverRef
  )

  return (
    <FocusScope restoreFocus>
      <div {...overlayProps} ref={popoverRef}>
        {children}
        <DismissButton onDismiss={onClose} />
      </div>
    </FocusScope>
  )
}
