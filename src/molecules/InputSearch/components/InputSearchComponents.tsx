import styled from 'styled-components'
import { variant } from 'styled-system'

import {
  DsColorGraySpaceGray,
  DsColorGrayPolarExtraLight,
  DsFontSizeXlg,
  DsSpacingXs,
  DsSpacingMd,
  DsSpacingSm,
  DsColorGraySmokeExtraLight
} from '@tokens/tokens'
import Button from '@atoms/Button/Button'

import { BUTTON_SIZES } from './types'
import { HTMLAttributes } from 'react'

export const Wrapper = styled.div`
  display: flex;
`

export const SearchButton = styled(Button)<HTMLAttributes<HTMLButtonElement>>`
  min-width: unset;
  position: relative;
  color: ${DsColorGraySpaceGray};
  background: ${DsColorGrayPolarExtraLight};
  border-color: ${DsColorGraySmokeExtraLight} ${DsColorGraySmokeExtraLight}
    ${DsColorGraySmokeExtraLight} transparent;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
  & > i {
    width: 100%;
    display: flex;
    align-items: inherit;
    justify-content: inherit;
  }
  & > i > svg {
    stroke: none;
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: ${DsFontSizeXlg};
    user-select: none;
    flex-shrink: 0;
  }
`

export const ButtonSizes = variant({
  prop: 'size',
  variants: {
    md: {
      height: `${BUTTON_SIZES.md}`,
      width: `${BUTTON_SIZES.md}`
    },
    lg: {
      height: `${BUTTON_SIZES.lg}`,
      width: `${BUTTON_SIZES.lg}`
    }
  }
})

export const InputSizes = variant({
  prop: 'componentSize',
  variants: {
    md: {
      padding: `${DsSpacingXs} ${DsSpacingMd}`
    },
    lg: {
      padding: `${DsSpacingSm} ${DsSpacingMd}`
    }
  }
})

export const InputFullWidth = variant({
  prop: 'fullWidth',
  variants: {
    true: {
      width: '100%'
    }
  }
})
