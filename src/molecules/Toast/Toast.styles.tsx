/* eslint-disable @typescript-eslint/no-explicit-any */
import css from '@styled-system/css'
import { variant } from 'styled-system'

import {
  DsBorderRadius,
  DsSpacingLg,
  DsColorGrayBlackboard,
  DsColorGraySnow,
  DsFontSizeBase
} from '@tokens/tokens'

const ToastContainer = css({
  bottom: '0',
  left: '0',
  position: 'fixed'
}) as any

const ToastBox = css({
  background: `${DsColorGrayBlackboard}`,
  borderRadius: `${DsBorderRadius}`,
  boxShadow:
    '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)',
  display: 'inline-flex',
  justifyContent: 'space-between',
  left: `${DsSpacingLg}`,
  maxWidth: '568px',
  minWidth: '288px',
  padding: `6px ${DsSpacingLg}`,
  position: 'absolute',
  transition: '0.3s',
  visibility: 'hidden'
}) as any

const ToastBoxVariants = variant({
  prop: 'open',
  variants: {
    false: {
      bottom: '-110px',
      visibility: 'hidden'
    },
    true: {
      bottom: `${DsSpacingLg}`,
      visibility: 'visible'
    }
  }
}) as any

const ToastText = css({
  alignItems: 'center',
  color: `${DsColorGraySnow}`,
  display: 'flex',
  fontSize: `${DsFontSizeBase}`,
  lineHeight: '1.5'
}) as any

const ToastActions = css({
  display: 'inline-flex',
  alignItems: 'center'
}) as any

export { ToastBox, ToastBoxVariants, ToastContainer, ToastText, ToastActions }
