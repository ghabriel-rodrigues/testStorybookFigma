import {
  DsBorderRadius,
  DsBorderWidth,
  DsColorGrayBlackboard,
  DsColorPrimaryBlueSecondary,
  DsColorPrimaryBlueSecondaryLight,
  DsFontSizeBase,
  DsFontWeightBold,
  DsSpacingSm,
  DsSpacingXs
} from '@tokens/tokens'
import css from '@styled-system/css'

export const DropdownWrapCSS = css({
  display: 'flex',
  flexDirection: 'column'
})

export const DropdownLabelCSS = css({
  marginBottom: DsSpacingSm
})

export const MultiValueWrapCSS = css({
  display: 'flex',
  border: `${DsBorderWidth} solid ${DsColorPrimaryBlueSecondary}`,
  borderRadius: DsBorderRadius,
  backgroundColor: DsColorPrimaryBlueSecondaryLight,
  margin: DsSpacingXs
})

export const MultiValueTextCSS = css({
  overflow: 'hidden',
  lineHeight: 1,
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  padding: `${DsSpacingXs} 0 ${DsSpacingXs} ${DsSpacingXs}`,
  fontSize: DsFontSizeBase,
  fontWeight: DsFontWeightBold,
  color: DsColorGrayBlackboard,
  border: 0,
  backgroundColor: 'transparent'
})

export const MultiValueCloseButtonCSS = css({
  padding: 0,
  marginLeft: DsSpacingXs,
  border: `${DsBorderWidth} solid transparent`,
  borderRadius: `0 ${DsBorderRadius} ${DsBorderRadius} 0`,
  backgroundColor: 'transparent',
  cursor: 'pointer'
})
