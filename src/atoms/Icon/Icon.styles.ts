import css from '@styled-system/css'
import { DsColorPrimaryBlueDark } from '@tokens/tokens'

export const IconWrapperCSS = css({
  display: 'flex',
  alignItems: 'center',

  '&& > svg': {
    stroke: 'none',
    color: `${DsColorPrimaryBlueDark}`
  }
})
