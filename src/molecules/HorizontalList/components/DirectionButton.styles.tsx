import css from '@styled-system/css'
import { DsBorderWidth, DsColorPrimaryBlue, DsSpacingXl } from '@tokens/tokens'

export const DirectionButtonStyles = css({
  border: `${DsBorderWidth} solid ${DsColorPrimaryBlue}`,
  height: DsSpacingXl,
  minHeight: DsSpacingXl,
  width: DsSpacingXl,
  minWidth: DsSpacingXl,
  borderRadius: DsSpacingXl,
  padding: 0,
  margin: 0,
  svg: {
    padding: 0
  }
})
