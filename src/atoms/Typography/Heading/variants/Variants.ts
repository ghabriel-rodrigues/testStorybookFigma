import {
  DsFontSizeLg2,
  DsFontSizeNm,
  DsFontSizeXlg,
  DsFontSizeXxlg
} from '@/tokens/tokens'
import { variant } from 'styled-system'

const variants = variant({
  prop: 'variant',
  variants: {
    h1: {
      fontSize: DsFontSizeXxlg,
      lineHeight: 1.5
    },
    h2: {
      fontSize: DsFontSizeXlg,
      lineHeight: 1.5
    },
    h3: {
      fontSize: DsFontSizeNm,
      lineHeight: 1.25
    },
    h4: {
      fontSize: DsFontSizeLg2,
      lineHeight: 1.25
    }
  }
})

export default variants
