import React, { useMemo } from 'react'
import styled from 'styled-components'
import { flexbox, layout, LayoutProps, FlexboxProps } from 'styled-system'
import { Columns, GridVariant } from './types/Types'
import variants from './variants/Variants'

interface GridProps {
  xs?: Columns
  sm?: Columns
  md?: Columns
  lg?: Columns
  variant?: GridVariant | string
}

type Props = GridProps & FlexboxProps

const GridContent = styled.div<FlexboxProps & LayoutProps & Props>`
  ${flexbox}
  ${layout}
  ${variants}
`
const getPercentage = (value: number) => `${(value / Columns.c12) * 100}%`

const Grid: React.FC<Props> = ({
  children,
  xs = Columns.c12,
  sm = xs,
  md = sm,
  lg = md,
  variant = GridVariant.item,
  ...props
}) => {
  const sizes = useMemo(
    () => [
      getPercentage(xs),
      getPercentage(sm),
      getPercentage(md),
      getPercentage(lg)
    ],
    [xs, sm, md, lg]
  )

  return (
    <GridContent
      variant={variant}
      flexBasis={sizes}
      maxWidth={sizes}
      {...props}
    >
      {children}
    </GridContent>
  )
}

export default Grid
