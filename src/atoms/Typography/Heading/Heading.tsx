import {
  DsColorGrayBlackboard,
  DsFontFamilyMain,
  DsFontWeightBold
} from '@/tokens/tokens'
import React from 'react'
import styled from 'styled-components'
import {
  color,
  typography,
  TypographyProps,
  ColorProps,
  space,
  SpaceProps
} from 'styled-system'
import { HeadingVariant } from './types/Types'
import variants from './variants/Variants'

interface HeadingProps {
  children: React.ReactNode | React.ReactElement
  variant: HeadingVariant | string
}

const HeadingContent = styled(({ variant, children, ...otherProps }) => {
  const HeadTag = variant
  return <HeadTag {...otherProps}>{children}</HeadTag>
})<TypographyProps & ColorProps & SpaceProps>`
  ${typography}
  ${color}
  ${variants}
  ${space}
`

const Heading: React.FC<HeadingProps> = ({ variant, ...otherProps }) => {
  return (
    <HeadingContent
      fontFamily={DsFontFamilyMain}
      fontWeight={DsFontWeightBold}
      color={DsColorGrayBlackboard}
      variant={variant}
      my={0}
      {...otherProps}
    />
  )
}

export default Heading
