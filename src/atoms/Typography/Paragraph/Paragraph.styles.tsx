import css from '@styled-system/css'
import {
  DsFontFamilyMain,
  DsColorGrayBlackboard,
  DsFontWeightNormal,
  DsFontSizeBase
} from '@tokens/tokens'

export const ParagraphStyles = css({
  fontFamily: `${DsFontFamilyMain}`,
  fontWeight: `${DsFontWeightNormal}`,
  fontSize: `${DsFontSizeBase}`,
  color: `${DsColorGrayBlackboard}`,
  lineHeight: 1.5,
  margin: 0
})
