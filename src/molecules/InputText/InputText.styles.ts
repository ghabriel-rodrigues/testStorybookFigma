import css from '@styled-system/css'
import { variant } from 'styled-system'

import { DsColorGraySpaceGray, DsSpacingSm } from '@tokens/tokens'

export const InputPaddingLeftCSS = variant({
  prop: 'paddingLeft',
  variants: {
    sm: {
      paddingLeft: '10px'
    },
    lg: {
      paddingLeft: '40px'
    }
  }
})

export const IconVerticalPositionCSS = variant({
  prop: 'verticalPosition',
  variants: {
    top: {
      top: '12px'
    },
    bottom: {
      top: '36px'
    }
  }
})

export const LabelComponentCSS = css({
  marginBottom: `${DsSpacingSm}`,
  display: 'inline-block'
})

export const IconCSS = css({
  width: '12px',
  height: '12px',
  position: 'absolute',
  color: `${DsColorGraySpaceGray}`
})

export const IconLeftCSS = css({
  paddingLeft: '18px'
})

export const IconRightCSS = css({
  right: '0',
  paddingRight: '18px'
})

export const WrapperCSS = css({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative'
})

export const HelperMessageCSS = css({
  marginTop: `${DsSpacingSm}`,
  lineHeight: '24px',
  paddingLeft: '2px'
})
