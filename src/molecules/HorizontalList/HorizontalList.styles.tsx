import css from '@styled-system/css'
import {
  DsBorderRadius,
  DsColorGrayPolar,
  DsColorPrimaryBlue,
  DsSpacingLg,
  DsSpacingMd,
  DsSpacingSm,
  DsSpacingXl,
  DsSpacingXs,
  DsScreenMd,
  DsScreenSm
} from '@tokens/tokens'
import { rem } from 'polished'

export const WrapperCSS = css({
  display: 'grid',
  gridTemplateRows: 'auto auto',
  rowGap: DsSpacingMd,
  [`@media (min-width: ${DsScreenSm})`]: {
    gridTemplateColumns: 'auto 1fr auto',
    gridTemplateRows: 'auto',
    alignItems: 'center',
    columnGap: DsSpacingMd,
    rowGap: 0,
    paddingInline: DsSpacingLg
  },
  [`@media (min-width: ${DsScreenMd})`]: {
    paddingInline: 0
  }
})

export const GreaterThanSmCSS = css({
  display: 'none',
  [`@media (min-width: ${DsScreenSm})`]: {
    display: 'initial'
  }
})

export const WithScrollbarWrapperCSS = css({
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  gap: DsSpacingMd
})

export const DirectionButtonsWrapperCSS = css({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
  justifyItems: 'center',
  placeItems: 'center',
  gap: DsSpacingXl,
  paddingInline: DsSpacingLg,
  [`@media (min-width: ${DsScreenSm})`]: {
    display: 'none'
  }
})

export const ScrollCSS = css({
  position: 'relative',
  height: DsSpacingXs,
  width: '100%',
  backgroundColor: DsColorGrayPolar,
  borderRadius: DsBorderRadius,
  overflow: 'hidden',
  [`@media (min-width: ${DsScreenMd})`]: {
    marginInline: 'auto',
    width: rem(72)
  }
})

export const ScrollThumbCSS = css({
  position: 'absolute',
  content: "''",
  height: '100%',
  backgroundColor: DsColorPrimaryBlue
})

export const RemoveDefaultScrollBar = css({
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '&::-webkit-scrollbar': { width: '0', height: '0' }
})

export const ScrollWrapperCSS = css({
  display: 'grid',
  gridAutoFlow: 'column',
  gridAutoColumns: 'auto',
  gridTemplateRows: 'max-content',
  gridGap: DsSpacingSm as any,
  margin: 0,
  padding: DsSpacingXs,
  overflowX: 'auto',
  scrollBehavior: 'smooth',
  overscrollBehaviorInline: 'contain',
  scrollSnapType: 'inline mandatory',
  paddingInline: DsSpacingLg,
  scrollPaddingInline: DsSpacingLg,
  '& > *': {
    scrollSnapAlign: 'start'
  },
  [`@media (min-width: ${DsScreenSm})`]: {
    paddingInline: DsSpacingXs,
    scrollPaddingInline: DsSpacingXs
  },
  [`@media (min-width: ${DsScreenMd})`]: {
    gridGap: DsSpacingLg,
    padding: DsSpacingXs
  }
})

export const BaseMediaCSS = css({
  maxWidth: '100vw'
})
