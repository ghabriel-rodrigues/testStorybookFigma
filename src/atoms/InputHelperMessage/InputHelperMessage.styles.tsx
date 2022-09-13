import css from '@styled-system/css'
import { variant } from 'styled-system'
import {
  DsFontSizeBase,
  DsColorGraySpaceGray,
  DsSpacingXs,
  DsColorAlertDanger,
  DsColorPrimaryBlue
} from '@tokens/tokens'

export const variants = variant({
  prop: 'type',
  variants: {
    error: {
      svg: {
        color: `${DsColorAlertDanger} !important`
      }
    },
    regular: {
      svg: {
        color: `${DsColorPrimaryBlue} !important`
      }
    },
    empty: {
      svg: {
        display: 'none'
      }
    }
  }
})

const SpanBaseCSS = css({
  display: 'flex',
  flexDirection: 'row',
  gap: `${DsSpacingXs}`,
  fontSize: `${DsFontSizeBase}`,
  color: `${DsColorGraySpaceGray}`,
  lineHeight: '24px'
})

export { SpanBaseCSS }
