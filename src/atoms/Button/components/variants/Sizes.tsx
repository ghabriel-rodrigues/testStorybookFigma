import { variant } from 'styled-system'
import {
  DsColorPrimaryBlueDark,
  DsFontSizeBase,
  DsFontSizeLg,
  DsFontSizeLg2,
  DsFontSizeSm,
  DsSpacingLg,
  DsSpacingMd,
  DsSpacingXl,
  DsSpacingXs
} from '@tokens/tokens'

const sizes = variant({
  prop: 'size',
  variants: {
    link: {
      minWidth: 'auto',
      padding: 0,
      '&:hover': {
        color: `${DsColorPrimaryBlueDark}`,
        backgroundColor: 'transparent'
      }
    },
    xs: {
      fontSize: `${DsFontSizeSm}`,
      height: '24px',
      lineHeight: '24px',
      minHeight: '24px',
      minWidth: '72px',
      padding: `0 ${DsSpacingXs}`
    },
    sm: {
      fontSize: `${DsFontSizeBase}`,
      height: '32px',
      lineHeight: '32px',
      minHeight: '32px',
      minWidth: '96px',
      padding: `0 ${DsSpacingMd}`
    },
    md: {
      fontSize: `${DsFontSizeBase}`,
      height: '44px',
      lineHeight: '44px',
      minHeight: '44px',
      minWidth: '120px',
      padding: `0 ${DsSpacingLg}`
    },
    lg: {
      fontSize: `${DsFontSizeLg}`,
      height: '48px',
      lineHeight: '48px',
      minHeight: '48px',
      minWidth: '144px',
      padding: `0 ${DsSpacingLg}`
    },
    xl: {
      fontSize: `${DsFontSizeLg2}`,
      height: '56px',
      lineHeight: '56px',
      minHeight: '56px',
      minWidth: '168px',
      padding: `0 ${DsSpacingXl}`
    }
  }
})

export default sizes
