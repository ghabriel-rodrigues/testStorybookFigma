/* eslint-disable @typescript-eslint/no-explicit-any */
import css from '@styled-system/css'

import { DsColorGrayBlackboard, DsColorGrayPolar } from '@tokens/tokens'

const ToastClose = css({
  background: `${DsColorGrayBlackboard}`,
  border: '0',
  borderRadius: '50%',
  color: `${DsColorGrayPolar}`,
  cursor: 'pointer',
  display: 'flex',
  padding: '10px',
  transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.08)'
  },

  svg: {
    fill: 'white',
    fontSize: '20px',
    height: '1em',
    width: '1em'
  }
}) as any

export { ToastClose }
