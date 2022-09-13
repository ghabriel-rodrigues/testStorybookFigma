import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

import { LabelPositions } from '@atoms/Label/Types'
import Checkbox from '@atoms/Checkbox/Checkbox'
import HelperMessage from '@atoms/InputHelperMessage/InputHelperMessage'
import Label from '@atoms/Label/Label'

const Container = styled.div`
  display: flex;
  margin: 0;

  label {
    padding: 12px;
  }
`

export interface CheckboxLabelProps
  extends InputHTMLAttributes<HTMLInputElement> {
  id: string

  checked?: boolean
  disabled?: boolean
  hasError?: boolean
  helperMessage?: string
  label?: string
  labelPosition?: LabelPositions | string
  name?: string
}

const hasInitialLabel = (labelPosition = '', label = ''): boolean =>
  labelPosition === LabelPositions.start && label !== ''

const hasFinalLabel = (labelPosition = '', label = ''): boolean =>
  (labelPosition === LabelPositions.end || labelPosition === '') && label !== ''

const CheckboxLabel: React.FC<CheckboxLabelProps> = ({ ...props }) => {
  const { id, hasError, helperMessage, label, labelPosition } = props

  return (
    <>
      <Container>
        {hasInitialLabel(labelPosition, label) && (
          <Label htmlFor={id}>{label}</Label>
        )}

        <Checkbox {...props} />
        {hasFinalLabel(labelPosition, label) && (
          <Label htmlFor={id}>{label}</Label>
        )}
      </Container>
      {helperMessage && (
        <HelperMessage id={`${id}-description`} hasError={hasError}>
          {helperMessage}
        </HelperMessage>
      )}
    </>
  )
}

export default CheckboxLabel
