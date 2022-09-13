import {
  DsColorGraySnow,
  DsColorGraySteel,
  DsColorPrimaryBlue
} from '@/tokens/tokens'
import { variant } from 'styled-system'

// @TODO: Ripple effect is not being supported right now. Please check the link for a possible solution.
// https://css-tricks.com/how-to-recreate-the-ripple-effect-of-material-design-buttons/
const sharedAttributes = {
  borderRadius: '20px',
  cursor: 'pointer',
  float: 'left',
  height: '16px',
  position: 'relative',
  transition: 'all 150ms',
  width: '16px'
}

const modifiers = variant({
  prop: 'checkedState',
  variants: {
    checked: {
      borderColor: `${DsColorPrimaryBlue}`,
      '&::before': {
        content: '""',
        background: `${DsColorPrimaryBlue}`,
        borderRadius: '20px',
        display: 'block',
        height: '10px',
        left: '50%',
        marginLeft: '-5px',
        marginTop: '-5px',
        position: 'absolute',
        top: '50%',
        transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        visibility: 'visible',
        width: '10px'
      },
      ...sharedAttributes
    },
    unchecked: {
      background: `${DsColorGraySnow}`,
      border: `2px solid ${DsColorGraySteel}`,
      '&::before': {
        content: '""',
        height: '10px',
        width: '10px',
        visibility: 'hidden'
      },
      ...sharedAttributes
    }
  }
})

const disabledModifier = variant({
  prop: 'disabledState',
  variants: {
    disabled: {
      background: `${DsColorGraySteel}`,
      borderColor: `${DsColorGraySteel}`,
      cursor: 'default',
      opacity: '0.3'
    },
    enabled: {}
  }
})

const focusedModifier = variant({
  prop: 'isFocused',
  variants: {
    true: {
      outline: '2px auto -webkit-focus-ring-color',
      outlineOffset: 3
    },
    '': {}
  }
})

export default modifiers
export { disabledModifier, focusedModifier }
