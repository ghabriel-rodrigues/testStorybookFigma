import {
  DsSpacingSm,
  DsBorderWidth,
  DsBorderRadius,
  DsColorGrayBlackboard,
  DsColorPrimaryBlueSecondary,
  DsColorPrimaryBlueSecondaryLight,
  DsFontWeightBold,
  DsFontSizeBase
} from '@tokens/tokens'
import css from '@styled-system/css'

export const BoxCSS = css({
  display: 'inline-flex',
  alignItems: 'center',
  border: `${DsBorderWidth} solid ${DsColorPrimaryBlueSecondary}`,
  borderRadius: DsBorderRadius,
  backgroundColor: DsColorPrimaryBlueSecondaryLight
})

export const TextCSS = css({
  overflow: 'hidden',
  lineHeight: 1,
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  fontSize: DsFontSizeBase,
  fontWeight: DsFontWeightBold,
  color: DsColorGrayBlackboard,
  padding: DsSpacingSm,
  border: 0,
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center'
})

export const ButtonCSS = css({
  display: 'inline-flex',
  alignItems: 'center',
  height: '2em',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  padding: `${DsSpacingSm} ${DsSpacingSm} ${DsSpacingSm} 0`
})

export const IconCSS = css({
  '&&': {
    width: '0.7em',
    fill: DsColorGrayBlackboard
  }
})
