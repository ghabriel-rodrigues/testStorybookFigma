import { variant } from 'styled-system'
import {
  DsColorPrimaryBlueDark,
  DsBorderRadius,
  DsColorGraySnow,
  DsColorPrimaryBlue,
  DsBorderWidth
} from '@tokens/tokens'

// @TODO: Ripple effect is not being supported right now. Please check the link for a possible solution.
// https://css-tricks.com/how-to-recreate-the-ripple-effect-of-material-design-buttons/
const sharedAttributes = {
  '-webkit-appearance': 'none',
  '-moz-appearance': 'none',
  alignItems: 'center',
  appearance: 'none',
  borderRadius: `${DsBorderRadius}`,
  boxSizing: 'border-box',
  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'center',
  verticalAlign: 'middle',
  transition: `background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
               box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
               border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
  '&:disabled': {
    opacity: '0.3'
  }
}

const sharedIconLeftCSS = {
  svg: {
    padding: '0 10px 0 0'
  }
}

const sharedIconRightCSS = {
  svg: {
    padding: '0 0 0 10px'
  }
}

export const IconLeftCSS = {
  variants: {
    contained: sharedIconLeftCSS,
    outlined: sharedIconLeftCSS,
    text: sharedIconLeftCSS,
    link: sharedIconLeftCSS
  }
}

export const IconRightCSS = {
  variants: {
    contained: sharedIconRightCSS,
    outlined: sharedIconRightCSS,
    text: sharedIconRightCSS,
    link: sharedIconRightCSS
  }
}

const variants = variant({
  prop: 'variant',
  variants: {
    contained: {
      background: `${DsColorPrimaryBlue}`,
      border: 'none',
      color: `${DsColorGraySnow}`,
      svg: {
        fill: `${DsColorGraySnow}`
      },
      '&:active': {
        boxShadow: `0px 5px 5px -3px rgb(0 0 0 / 20%), 
                    0px 8px 10px 1px rgb(0 0 0 / 14%), 
                    0px 3px 14px 2px rgb(0 0 0 / 12%)`
      },
      '&:hover': {
        backgroundColor: `${DsColorPrimaryBlueDark}`
      },
      ...sharedAttributes
    },
    outlined: {
      background: `${DsColorGraySnow}`,
      borderColor: `${DsColorPrimaryBlue}`,
      border: `${DsBorderWidth} solid rgba(0, 0, 0, 0.23)`,
      color: `${DsColorPrimaryBlue}`,
      svg: {
        fill: `${DsColorPrimaryBlue}`
      },
      '&:hover': {
        backgroundColor: 'rgba(19, 51, 95, 0.08)'
      },
      ...sharedAttributes
    },
    text: {
      backgroundColor: 'transparent',
      color: `${DsColorPrimaryBlue}`,
      border: 'none',
      svg: {
        fill: `${DsColorPrimaryBlue}`
      },
      '&:hover': {
        backgroundColor: 'rgba(19, 51, 95, 0.08)'
      },
      ...sharedAttributes
    },
    link: {
      background: 'none',
      border: 'none',
      color: `${DsColorPrimaryBlueDark}`,
      textDecoration: 'none',
      svg: {
        fill: `${DsColorPrimaryBlueDark}`
      },
      ...sharedAttributes
    }
  }
})

export default variants
