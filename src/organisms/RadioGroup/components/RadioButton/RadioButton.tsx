import React from 'react'
import styled from 'styled-components'

import BaseLabel from '@atoms/Label/Label'
import { LabelPositions } from '@atoms/Label/Types'

import { LabelCSS, SpanCSS } from './RadioButton.styles'
import { RadioButtonProps } from './RadioButton.types'
import Radio from '../Radio/Radio'

const Label = styled.label`
  ${LabelCSS}
`

const Span = styled(BaseLabel).attrs({ as: 'span' })`
  ${SpanCSS}
`

const hasStartLabel = (labelPosition = '', label = ''): boolean =>
  labelPosition === LabelPositions.start && label !== ''

const hasEndLabel = (labelPosition = '', label = ''): boolean =>
  (labelPosition === LabelPositions.end || labelPosition === '') && label !== ''

const RadioButton: React.FC<RadioButtonProps> = (props) => {
  const { id, label, labelPosition } = props

  return (
    <Label htmlFor={id}>
      {hasStartLabel(labelPosition, label) && <Span aria-hidden>{label}</Span>}
      <Radio aria-label={label} {...props} />
      {hasEndLabel(labelPosition, label) && <Span aria-hidden>{label}</Span>}
    </Label>
  )
}

export default RadioButton
