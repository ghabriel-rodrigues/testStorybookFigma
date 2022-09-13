/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DsColorGrayPolarLight,
  DsColorGraySmokeExtraLight,
  DsColorGraySteel,
  DsColorPrimaryBlue,
  DsColorPrimaryBlueLight,
  DsFontSizeBase,
  DsFontWeightBold
} from '@/tokens/tokens'
import css from '@styled-system/css'
import { variant } from 'styled-system'

const ToggleButtonPressedCSS = variant({
  prop: 'isSelected',
  variants: {
    true: {
      color: `${DsColorPrimaryBlue}`,
      backgroundColor: `${DsColorPrimaryBlueLight} !important` //:hover e :focus estão afetando o bg se o botão está selecionado.
    },
    false: {
      backgroundColor: `none`,
      borderColor: `${DsColorGraySmokeExtraLight}`,
      color: `${DsColorGraySteel}`,
      ':hover': {
        borderColor: `${DsColorGraySteel}`,
        backgroundColor: `${DsColorGrayPolarLight}`
      },
      ':focus': {
        backgroundColor: `${DsColorGrayPolarLight}`,
        borderColor: `${DsColorPrimaryBlue}`,
        boxShadow: `${DsColorPrimaryBlueLight} 0px 0px 0px 2px`,
        color: `${DsColorGraySteel}`
      }
    }
  }
})

const ToggleButtonCSS = css({
  borderRadius: '4px',
  fontSize: `${DsFontSizeBase}`,
  fontWeight: `${DsFontWeightBold}`,
  minWidth: 'initial',
  padding: '12px',
  textAlign: 'left'
}) as any

export { ToggleButtonCSS, ToggleButtonPressedCSS }
