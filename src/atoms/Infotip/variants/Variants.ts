import { variant } from 'styled-system'
import { DsColorGrayBlackboard } from '@/tokens/tokens'

const arrowSize = 8
const tooltipSize = 120

const sharedBottomArrowAttributes = {
  borderBottom: `0 solid transparent`,
  borderLeft: `${arrowSize}px solid transparent`,
  borderRight: `${arrowSize}px solid transparent`,
  borderTop: `${arrowSize}px solid ${DsColorGrayBlackboard}`,
  bottom: `-${arrowSize}px`
}

const sharedTopArrowAttributes = {
  borderBottom: `${arrowSize}px solid ${DsColorGrayBlackboard}`,
  borderLeft: `${arrowSize}px solid transparent`,
  borderRight: `${arrowSize}px solid transparent`,
  borderTop: `0 solid transparent`,
  top: `-${arrowSize}px`
}

export const tooltipPosition = variant({
  prop: 'position',
  variants: {
    top: {
      width: `${tooltipSize}px`,
      bottom: `calc(100% + ${arrowSize}px)`,
      left: '50%',
      transform: 'translateX(-50%)',
      '&::before': {
        ...sharedBottomArrowAttributes,
        marginRight: `-${arrowSize}px`,
        right: '50%'
      }
    },
    'top-right': {
      width: `${tooltipSize}px`,
      bottom: `calc(100% + ${arrowSize}px)`,
      left: '100%',
      transform: 'translateX(-100%)',
      '&::before': {
        ...sharedBottomArrowAttributes,
        marginLeft: `-${arrowSize}px`,
        right: '0',
        transform: 'translateX(-50%)'
      }
    },
    'top-left': {
      width: `${tooltipSize}px`,
      bottom: `calc(100% + ${arrowSize}px)`,
      '&::before': {
        ...sharedBottomArrowAttributes,
        marginRight: `${arrowSize}px`,
        left: '0',
        transform: 'translateX(50%)'
      }
    },
    bottom: {
      width: `${tooltipSize}px`,
      top: `calc(100% + ${arrowSize}px)`,
      left: '50%',
      transform: 'translateX(-50%)',
      '&::before': {
        ...sharedTopArrowAttributes,
        marginRight: `-${arrowSize}px`,
        right: '50%'
      }
    },
    'bottom-right': {
      width: `${tooltipSize}px`,
      top: `calc(100% + ${arrowSize}px)`,
      left: '100%',
      transform: 'translateX(-100%)',
      '&::before': {
        ...sharedTopArrowAttributes,
        marginLeft: `-${arrowSize}px`,
        right: '0',
        transform: 'translateX(-50%)'
      }
    },
    'bottom-left': {
      width: `${tooltipSize}px`,
      top: `calc(100% + ${arrowSize}px)`,
      '&::before': {
        ...sharedTopArrowAttributes,
        marginRight: `${arrowSize}px`,
        left: '0',
        transform: 'translateX(50%)'
      }
    }
  }
})
