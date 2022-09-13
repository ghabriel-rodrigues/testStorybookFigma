import { DsBorderWidth, DsColorGraySmokeExtraLight } from '@/tokens/tokens'
import css from '@styled-system/css'
import { variant } from 'styled-system'

export const AvatarImageSizes = variant({
  prop: 'size',
  variants: {
    xs: {
      width: '32px',
      height: '32px'
    },
    sm: {
      width: '44px',
      height: '44px'
    },
    md: {
      width: '64px',
      height: '64px'
    },
    lg: {
      width: '80px',
      height: '80px'
    },
    xl: {
      width: '96px',
      height: '96px'
    }
  }
})

export const FlatStyles = variant({
  prop: 'isFlat',
  variants: {
    false: {
      border: `${DsBorderWidth} solid ${DsColorGraySmokeExtraLight}`
    }
  }
})

export const AvatarImageStyles = css({
  borderRadius: '50%'
})
