import css from '@styled-system/css'
import {
  DsColorPrimaryBlueLight,
  DsBorderWidth,
  DsBorderRadius,
  DsFontSizeLg,
  DsColorGraySmokeLight,
  DsColorGraySmokeExtraLight,
  DsSpacingXs,
  DsFontWeightBold,
  DsFontFamilyMain
} from '@/tokens/tokens'

export const ListBaseCSS = css({
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center'
})

export const ItemBaseCSS = css({
  margin: DsSpacingXs
})

export const ButtonCSS = css({
  border: `${DsBorderWidth} solid transparent`,
  borderRadius: DsBorderRadius,
  cursor: 'pointer',
  fontWeight: DsFontWeightBold,
  fontFamily: DsFontFamilyMain,
  fontSize: DsFontSizeLg,
  lineHeight: 1.5,
  margin: 0,
  background: 'transparent',
  transition: 'background 0.3s',
  '&:hover:not(:disabled)': {
    background: DsColorGraySmokeExtraLight
  }
})

export const PageButtonCSS = css({
  '&:focus': {
    boxShadow: `0px 0px 0px 3px ${DsColorPrimaryBlueLight}`
  }
})

export const NavigationButtonCSS = css({
  '&:disabled': {
    cursor: 'default',
    svg: {
      color: DsColorGraySmokeLight
    }
  }
})
