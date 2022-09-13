import { DsColorPrimaryBlue } from '@/tokens/tokens'
import { variant } from 'styled-system'

export const labelFirst = variant({
  prop: 'labelFirst',
  variants: {
    true: {
      flexDirection: 'row-reverse'
    },
    false: {}
  }
})

export const switchToggleDisabled = variant({
  prop: 'isDisabled',
  variants: {
    true: {
      opacity: 0.5
    },
    false: {}
  }
})

export const switchThumbChecked = variant({
  prop: 'isChecked',
  variants: {
    true: {
      backgroundColor: DsColorPrimaryBlue,
      transform: 'translateX(100%)',
      boxShadow:
        '0px 0px 2px rgba(0, 0, 0, 0.12, 0px 2px 2px rgba(0, 0, 0, 0.24)'
    },
    false: {}
  }
})
