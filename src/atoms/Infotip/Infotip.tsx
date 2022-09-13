import React, { ReactNode, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useTooltip, useTooltipTrigger } from '@react-aria/tooltip'
import {
  TooltipTriggerState,
  useTooltipTriggerState
} from '@react-stately/tooltip'
import { mergeProps } from '@react-aria/utils'
import { ButtonBaseCSS, InfotipBaseCSS, TooltipCSS } from './Infotip.styles'
import { tooltipPosition } from './variants/Variants'
import { PositionVariant } from './types/Types'
import { InfoTipProps } from './infotip.types'

const InfotipBase = styled.div`
  ${InfotipBaseCSS}
`
const TootipBase = styled.div`
  ${TooltipCSS}
  ${tooltipPosition}
`

const ButtonBase = styled.button`
  ${ButtonBaseCSS}
`

type TooltipProps = {
  children: ReactNode
  state?: TooltipTriggerState
  position?: PositionVariant | string
}

function Tooltip({ state, children, position, ...props }: TooltipProps) {
  const { tooltipProps } = useTooltip(props, state)
  return (
    <TootipBase {...mergeProps({ ...props, position }, tooltipProps)}>
      {children}
    </TootipBase>
  )
}

const Infotip: React.FC<InfoTipProps> = ({
  position = PositionVariant.top,
  tooltipText,
  ariaLabel,
  buttonProps,
  ...props
}) => {
  const state = useTooltipTriggerState(props)
  const tooltipTriggerRef = useRef<HTMLButtonElement>(null)
  const { triggerProps, tooltipProps } = useTooltipTrigger(
    props,
    state,
    tooltipTriggerRef
  )

  // handle close tooltip when opened by touch event
  useEffect(() => {
    const ref = tooltipTriggerRef
    function handleClickOutside(event: TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        if (state.isOpen) {
          state.close(true)
        }
      }
    }
    document.addEventListener('touchstart', handleClickOutside)
    return () => {
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [tooltipTriggerRef, state.isOpen])

  return (
    <InfotipBase>
      <ButtonBase
        aria-label={ariaLabel}
        ref={tooltipTriggerRef}
        {...triggerProps}
        onTouchStart={() => {
          if (!state.isOpen) {
            state.open()
          }
        }}
        {...buttonProps}
      >
        {props.children}
      </ButtonBase>
      {state.isOpen && (
        <Tooltip state={state} {...tooltipProps} position={position}>
          <span>{tooltipText}</span>
        </Tooltip>
      )}
    </InfotipBase>
  )
}

export default Infotip
