/* eslint-disable @typescript-eslint/no-explicit-any */
import { DsColorGraySteel } from '@/tokens/tokens'
import css from '@styled-system/css'

export const BaseRadioCSS = css({
  border: `2px solid ${DsColorGraySteel}`,
  cursor: 'pointer',
  display: 'inline-block',
  position: 'relative'
})
