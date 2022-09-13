/* eslint-disable @typescript-eslint/no-explicit-any */
import css from '@styled-system/css'

import {
  DsBorderRadius,
  DsColorGrayBlackboard,
  DsColorGrayPolar,
  DsFontSizeBase
} from '@tokens/tokens'

const ToastAction = css({
  background: `${DsColorGrayBlackboard}`,
  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  border: '0',
  borderRadius: `${DsBorderRadius}`,
  color: `${DsColorGrayPolar}`,
  cursor: 'pointer',
  fontSize: `${DsFontSizeBase}`,
  height: 'fit-content',
  lineHeight: '1.5',
  minHeight: '32px',
  minWidth: '64px',
  padding: '7px 8px',

  '&:hover': {
    backgroundColor: 'rgba(238, 238, 238, 0.08)'
  }
}) as any

export { ToastAction }
