import React from 'react'
import styled from 'styled-components'

import { LabelComponentCSS, WrapperCSS } from './LabeledTextArea.styles'
import Label from '@atoms/Label/Label'
import TextArea from '@/atoms/TextArea/TextArea'

export interface LabeledTextAreaProps {
  id: string
  label: string
  placeholder: string
  disabled?: boolean
  hasError?: boolean
  resize?: boolean
}

const Wrapper = styled.div`
  ${WrapperCSS}
`

const LabelComponent = styled(Label)`
  ${LabelComponentCSS}
`

const LabeledTextArea: React.FC<LabeledTextAreaProps> = ({
  id,
  label,
  placeholder,
  disabled = false,
  hasError = false,
  resize = false,
  ...props
}) => {
  const labeledTextAreaComponentProps = {
    placeholder,
    disabled,
    hasError,
    id,
    resize,
    'aria-labelledby': id,
    ...props
  }

  return (
    <Wrapper>
      {label && (
        <LabelComponent htmlFor={id} {...props}>
          {label}
        </LabelComponent>
      )}
      <TextArea {...labeledTextAreaComponentProps} />
    </Wrapper>
  )
}

export default LabeledTextArea
