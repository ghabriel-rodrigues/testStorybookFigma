import {
  DsColorGraySnow,
  DsColorGraySteel,
  DsColorPrimaryBlue
} from '@/tokens/tokens'
import { variant } from 'styled-system'

// @TODO: Ripple effect is not being supported right now. Please check the link for a possible solution.
// https://css-tricks.com/how-to-recreate-the-ripple-effect-of-material-design-buttons/
const sharedAttributes = {
  borderRadius: '2px',
  cursor: 'pointer',
  display: 'inline-block',
  marginTop: '12px'
}

const modifiers = variant({
  prop: 'checkedState',
  variants: {
    true: {
      background: `${DsColorPrimaryBlue}`,
      width: '18px',
      height: '18px',
      svg: {
        visibility: 'visible'
      },
      ...sharedAttributes
    },
    false: {
      background: `${DsColorGraySnow}`,
      border: `2px solid ${DsColorGraySteel}`,
      width: '14px',
      height: '14px',
      svg: {
        visibility: 'hidden'
      },
      ...sharedAttributes
    }
  }
})

const disabledModifier = variant({
  prop: 'disabledState',
  variants: {
    true: {
      background: `${DsColorGraySteel}`,
      borderColor: `${DsColorGraySteel}`,
      cursor: 'default',
      opacity: '0.3'
    }
  }
})

export default modifiers
export { disabledModifier }
