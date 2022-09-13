import css from '@styled-system/css'
import {
  DsColorGrayBlackboard,
  DsBorderRadius,
  DsColorGraySnow,
  DsColorAlertSuccessLight,
  DsColorAlertSuccess,
  DsColorAlertWarningLight,
  DsColorAlertWarning,
  DsColorAlertDangerLight,
  DsColorAlertDanger,
  DsBorderWidth,
  DsSpacingMd,
  DsFontSizeBase,
  DsFontSizeNm,
  DsColorAlertInformation,
  DsColorAlertInformationLight,
  DsSpacingSm
} from '@tokens/tokens'
import { variant } from 'styled-system'

const TipBaseCSS = css({
  display: 'flex',
  alignItems: 'flex-start',
  gap: `${DsSpacingSm}`,
  fontSize: `${DsFontSizeBase}`,
  lineHeight: `${DsFontSizeNm}`,
  textAlign: 'justify',
  textJustify: 'inter-word',
  borderStyle: 'solid',
  borderWidth: `${DsBorderWidth}`,
  borderRadius: `${DsBorderRadius}`,
  padding: `${DsSpacingMd}`,
  overflow: `hidden`
})

const TipTypesCSS = variant({
  prop: 'type',
  variants: {
    normal: {
      background: `${DsColorGraySnow}`,
      borderColor: `${DsColorGrayBlackboard}`
    },
    hint: {
      background: `${DsColorAlertInformationLight}`,
      borderColor: `${DsColorAlertInformation}`,
      svg: {
        color: `${DsColorAlertInformation} !important`
      }
    },
    info: {
      background: `${DsColorAlertSuccessLight}`,
      borderColor: `${DsColorAlertSuccess}`,
      svg: {
        color: `${DsColorAlertSuccess} !important`
      }
    },
    warning: {
      background: `${DsColorAlertWarningLight}`,
      borderColor: `${DsColorAlertWarning}`,
      svg: {
        color: `${DsColorAlertWarning} !important`
      }
    },
    danger: {
      background: `${DsColorAlertDangerLight}`,
      borderColor: `${DsColorAlertDanger}`,
      svg: {
        color: `${DsColorAlertDanger} !important`
      }
    }
  }
})

export { TipBaseCSS, TipTypesCSS }
