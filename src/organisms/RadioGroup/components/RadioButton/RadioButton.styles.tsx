/* eslint-disable @typescript-eslint/no-explicit-any */
import { DsColorTemporaryGray } from '@/tokens/tokens'
import css from '@styled-system/css'

export const LabelCSS = css({
  alignItems: 'center',
  display: 'flex',
  padding: '1.5px 0'
}) as any

export const SpanCSS = css({
  alignItems: 'center',
  color: `${DsColorTemporaryGray}`,
  display: 'flex',
  fontSize: '16px',
  paddingLeft: '8px',
  paddingRight: '16px'
})
