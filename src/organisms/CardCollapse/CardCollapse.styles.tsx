import css from '@styled-system/css'
import {
  DsColorGraySnow,
  DsSpacingSm,
  DsSpacingMd,
  DsBorderRadius
} from '@/tokens/tokens'

export const CollapsibleCSS = css({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  gap: `${DsSpacingMd}`,
  backgroundColor: `${DsColorGraySnow}`,
  padding: `${DsSpacingMd}`,
  borderRadius: `${DsBorderRadius}`,
  boxShadow: 'rgb(0 0 0 / 12%) 1px 1px 4px'
})

export const CollapsibleHeaderCSS = css({
  display: 'flex',
  alignItems: 'center',
  padding: `${DsSpacingSm} 0`,
  justifyContent: 'space-between'
})

export const CollapsibleButtonCSS = css({
  all: 'unset',
  cursor: 'pointer'
})

export const CollapsibleContentCSS = css({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  alignItems: 'flex-start'
})

export const CollapsibleDivisorCSS = css({
  marginTop: `${DsSpacingMd}`,
  marginBottom: `${DsSpacingMd}`
})

export const CollapsibleFooterCSS = css({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'space-around',
  alignItems: 'center'
})
