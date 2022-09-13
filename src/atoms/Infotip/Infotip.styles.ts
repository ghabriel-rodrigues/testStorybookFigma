/* eslint-disable @typescript-eslint/no-explicit-any */
import css from '@styled-system/css'
import {
  DsBorderRadius,
  DsColorGrayBlackboard,
  DsColorGraySnow,
  DsFontFamilyMain,
  DsFontSizeSm,
  DsSpacingSm
} from '@/tokens/tokens'

export const TooltipCSS = css({
  boxSizing: 'border-box',
  boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.1)',
  background: DsColorGrayBlackboard,
  borderRadius: DsBorderRadius,
  color: DsColorGraySnow,
  padding: DsSpacingSm,
  fontSize: DsFontSizeSm,
  fontFamily: DsFontFamilyMain,
  pointerEvents: 'none',
  whiteSpace: 'pre-wrap',
  position: 'absolute',
  textAlign: 'center',
  '&::before': {
    content: '""',
    height: 0,
    width: 0,
    position: 'absolute'
  }
})

export const InfotipBaseCSS = css({
  position: 'relative',
  display: 'inline-block'
})

export const ButtonBaseCSS = css({
  backgroundColor: 'transparent',
  border: 0,
  padding: 0,
  margin: 0
})
