import { variant } from 'styled-system'
import {
  DsColorPrimaryBlue,
  DsColorGrayPolarLight,
  DsColorGraySnow
} from '@/tokens/tokens'

export const modifiers = variant({
  prop: 'aria-current',
  variants: {
    true: {
      background: `${DsColorPrimaryBlue} !important`,
      color: DsColorGrayPolarLight
    },
    false: {
      background: DsColorGraySnow,
      color: DsColorPrimaryBlue
    }
  }
})
