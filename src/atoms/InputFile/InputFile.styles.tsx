import {
  DsBorderRadius,
  DsBorderWidth,
  DsColorAlertDanger,
  DsColorGrayPolarExtraLight,
  DsColorGraySpaceGray,
  DsColorPrimaryBlue,
  DsFontSizeBase,
  DsFontSizeLg,
  DsFontWeightBold,
  DsFontWeightNormal,
  DsSpacingLg,
  DsSpacingMd,
  DsSpacingSm,
  DsSpacingXl
} from '@/tokens/tokens'
import css from '@styled-system/css'

export const InputCSS = css({
  '&[type="file"]': {
    border: 0,
    clip: 'rect(0, 0, 0, 0)',
    height: '1px',
    overflow: 'hidden',
    padding: 0,
    position: ['absolute', '!important'],
    whiteSpace: 'nowrap',
    width: '1px'
  }
})

export const LabelMainContentWrapperCSS = css({
  display: 'flex',
  justifyContent: 'flex-start',
  gap: `${DsSpacingSm}`,
  svg: {
    width: `${DsFontSizeLg}`,
    height: `${DsFontSizeLg}`,
    color: `${DsColorPrimaryBlue} !important`
  }
})

export const ErrorMessageWrapperCSS = css({
  marginTop: `${DsSpacingMd}`
})

export const LabelHintWrapperCSS = css({
  fontSize: `${DsFontSizeBase}`,
  margin: 0
})

export const AcceptedFormatsCSS = css({
  fontWeight: `${DsFontWeightBold}`
})

export const LabelTextCSS = css({
  color: `${DsColorPrimaryBlue}`,
  fontWeight: `${DsFontWeightBold}`,
  fontSize: `${DsFontSizeLg}`,
  margin: 0
})

export const LabelFileNameCSS = css({
  fontSize: `${DsFontSizeBase}`,
  fontWeight: `${DsFontWeightNormal}`,
  color: `${DsColorGraySpaceGray}`,
  margin: 0
})

export const LabelCSS = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: `${DsSpacingMd}`,
  padding: `${DsSpacingLg} ${DsSpacingMd}`,
  backgroundColor: `${DsColorGrayPolarExtraLight}`,
  border: `${DsBorderWidth} dashed ${DsColorGraySpaceGray}`,
  borderRadius: `${DsBorderRadius}`,
  '&:hover': {
    cursor: 'pointer'
  }
})

export const LabelInvalidCSS = css({
  border: `${DsBorderWidth} dashed ${DsColorAlertDanger}`
})

export const LabelWithDividerCSS = css({
  position: 'relative',
  gap: `${DsSpacingXl}`,
  '&:after': {
    content: '""',
    height: '1px',
    width: '90%',
    position: 'absolute',
    top: '50%',
    backgroundColor: `${DsColorGraySpaceGray}`
  }
})
