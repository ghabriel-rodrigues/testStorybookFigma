/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DsBorderWidth,
  DsColorGrayPolarLight,
  DsColorGraySmokeExtraLight,
  DsColorGraySnow,
  DsColorGraySteel,
  DsColorPrimaryBlue,
  DsColorPrimaryBlueLight,
  DsFontSizeBase,
  DsFontWeightBold
} from '@/tokens/tokens'
import css from '@styled-system/css'

const ToggleButtonGroupCSS = css({
  background: `${DsColorGraySnow}`,
  border: `${DsBorderWidth} solid ${DsColorGraySmokeExtraLight}`,
  borderRadius: '4px',
  color: `${DsColorGraySteel}`,
  cursor: 'pointer',
  fontSize: `${DsFontSizeBase}`,
  fontWeight: `${DsFontWeightBold}`,
  minWidth: 'initial',
  padding: '12px',
  textAlign: 'left',
  ':focus': {
    backgroundColor: `${DsColorGrayPolarLight}`,
    borderColor: `${DsColorPrimaryBlue}`,
    boxShadow: `${DsColorPrimaryBlueLight} 0px 0px 0px 2px`
  },
  ':hover': {
    borderColor: `${DsColorGraySteel}`,
    backgroundColor: `${DsColorGrayPolarLight}`
  },
  '&[data-state="on"]': {
    color: `${DsColorPrimaryBlue}`,
    backgroundColor: `${DsColorPrimaryBlueLight}`,
    border: `${DsBorderWidth} solid ${DsColorPrimaryBlue}`
  }
}) as any

export default ToggleButtonGroupCSS
