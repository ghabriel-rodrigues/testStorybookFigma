import css from '@styled-system/css'
import {
  DsBorderRadius,
  DsColorGraySnow,
  DsColorAlertDanger,
  DsBorderWidth,
  DsColorGraySpaceGray,
  DsColorGraySmokeExtraLight,
  DsColorPrimaryBlueLight,
  DsColorPrimaryBlueSecondary,
  DsColorGraySmoke,
  DsColorGrayPolar
} from '@tokens/tokens'

export const TextAreaInvalid = css({
  borderColor: `${DsColorAlertDanger}`
})

export const TextAreaResize = css({
  resize: 'both'
})

const TextAreaBaseCSS = css({
  appearance: 'none',
  width: '100%',
  maxWidth: '100%',
  minHeight: '44px',
  borderRadius: `${DsBorderRadius}`,
  padding: '10px',
  boxSizing: 'border-box',
  border: `${DsBorderWidth} solid ${DsColorGraySmokeExtraLight}`,
  background: `${DsColorGraySnow}`,
  color: `${DsColorGraySpaceGray}`,
  lineHeight: '18px',
  fontSize: '${DsFontSizeLg}',
  resize: 'none',

  '::-webkit-input-placeholder': {
    color: `${DsColorGraySpaceGray}`
  },

  ':-ms-input-placeholder': {
    opacity: 1,
    color: `${DsColorGraySpaceGray}`
  },

  '::placeholder': {
    color: `${DsColorGraySpaceGray}`
  },

  '&:focus': {
    boxShadow: `0 0 0 2px ${DsColorPrimaryBlueLight}`,
    borderColor: `${DsColorPrimaryBlueSecondary}`,
    outline: 'none'
  },

  '&:disabled': {
    borderColor: `${DsColorGrayPolar}`,
    color: `${DsColorGraySmoke}`,

    '::-webkit-input-placeholder': {
      color: `${DsColorGraySmoke}`
    },
    ':-ms-input-placeholder': {
      opacity: 1,
      color: `${DsColorGraySmoke}`
    },
    '::placeholder': {
      color: `${DsColorGraySmoke}`
    }
  },

  '&:invalid': {
    borderColor: `${DsColorAlertDanger}`
  }
})

export { TextAreaBaseCSS }
