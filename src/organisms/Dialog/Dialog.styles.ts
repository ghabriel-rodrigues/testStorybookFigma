import {
  DsBorderRadius,
  DsBorderWidth,
  DsColorGraySnow,
  DsColorPrimaryBlue,
  DsColorPrimaryBlueDark,
  DsFontSizeLg2,
  DsScreenLg,
  DsScreenMd,
  DsScreenSm,
  DsScreenXs,
  DsSpacingLg,
  DsSpacingMd,
  DsSpacingSm
} from '@/tokens/tokens'
import css from '@styled-system/css'
import { variant } from 'styled-system'

export const size = variant({
  prop: 'size',
  variants: {
    xs: {
      maxWidth: `${DsScreenXs}`,
      width: '100%'
    },
    sm: {
      maxWidth: `${DsScreenSm}`,
      width: '100%'
    },
    md: {
      maxWidth: `${DsScreenMd}`,
      width: `${DsScreenMd}`
    },
    lg: {
      maxWidth: `${DsScreenLg}`,
      width: `${DsScreenLg}`
    },
    fullScreen: {
      maxWidth: `100vw`,
      width: `100vw`,
      maxHeight: `100vh`,
      height: `100vh`
    }
  }
})

export const fullScreenFooterVariants = variant({
  prop: 'footerVariant',
  variants: {
    horizontal: {
      flexDirection: 'row-reverse'
    },
    vertical: {
      flexDirection: 'column'
    }
  }
})

export const fullScreenWithoutBorderRadius = variant({
  prop: 'size',
  variants: {
    fullScreen: {
      borderRadius: '0px'
    }
  }
})

export const StyledWindowCSS = css({
  backgroundColor: DsColorGraySnow,
  borderRadius: DsBorderRadius,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  display: 'flex',
  flexDirection: 'column',
  left: '50%',
  position: 'fixed',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  '&:focus': {
    outline: 'none'
  }
})

export const StyledOverlayCSS = css({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  inset: 0,
  position: 'fixed'
})

export const StyledTitleCSS = css({
  alignItems: 'center',
  background: DsColorPrimaryBlue,
  borderRadius: `${DsBorderRadius} ${DsBorderRadius} 0 0`,
  color: DsColorGraySnow,
  display: 'flex',
  fontSize: DsFontSizeLg2,
  fontWeight: 400,
  justifyContent: 'space-between',
  lineHeight: '1.5',
  margin: '0px',
  padding: `${DsSpacingMd} ${DsSpacingMd} ${DsSpacingMd} ${DsSpacingLg}`
})

export const StyledContentWrapperCSS = css({
  height: '100%',
  display: 'flex',
  flexDirection: 'column'
})

export const StyledContentCSS = css({
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
  padding: DsSpacingLg,
  flex: 1,
  overflow: 'auto'
})

export const StyledFooterCSS = css({
  bottom: '0',
  boxShadow: 'rgb(0 0 0 / 20%) 0px 3px 12px 0px',
  display: 'flex',
  padding: DsSpacingLg,
  gap: DsSpacingSm
})

export const CloseButtonCSS = css({
  alignItems: 'center',
  backgroundColor: DsColorPrimaryBlue,
  borderRadius: DsBorderRadius,
  border: `${DsBorderWidth} solid transparent`,
  color: DsColorGraySnow,
  cursor: 'pointer',
  display: 'flex',
  padding: DsSpacingSm,
  position: 'absolute',
  right: '10px',
  top: '10px',
  svg: {
    color: `${DsColorGraySnow} !important`,
    fontSize: '1.2rem'
  },
  '&:hover': {
    backgroundColor: DsColorPrimaryBlueDark
  },
  '&:focus': {
    background: DsColorPrimaryBlueDark
  }
})
