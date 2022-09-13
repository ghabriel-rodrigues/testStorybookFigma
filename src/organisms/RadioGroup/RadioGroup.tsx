import Legend from '@/atoms/FieldSet/components/Legend'
import FieldSet from '@/atoms/FieldSet/FieldSet'
import React from 'react'
import styled from 'styled-components'
import RadioButton from './components/RadioButton/RadioButton'
import { useRadioGroup } from './context/RadioGroup.hooks'
import { RadioGroupProvider } from './context/RadioGroup.provider'
import { RadioGroupContainerCSS, TitleLabelCSS } from './RadioGroup.styles'
import { RadioGroupListProps, RadioGroupProps } from './RadioGroup.types'
import RadioGroupListCSS from './Variants'

const TitleLabel = styled(Legend)`
  ${TitleLabelCSS}
`

const RadioGroupContainer = styled(FieldSet)`
  ${RadioGroupContainerCSS}
`

const RadioGroupList = styled.div<RadioGroupListProps>`
  ${RadioGroupListCSS}
`

const RadioGroup: React.FC<RadioGroupProps> = ({
  items,
  labelPosition,
  ...props
}) => {
  const { label, orientation = 'horizontal' } = props
  const { radioGroupProps, labelProps, state } = useRadioGroup(props)

  return (
    <RadioGroupContainer role="radiogroup" {...radioGroupProps}>
      {label && <TitleLabel {...labelProps}>{label}</TitleLabel>}
      <RadioGroupProvider value={state}>
        <RadioGroupList orientation={orientation}>
          {items.map((item) => {
            return (
              <RadioButton
                key={item.value}
                {...item}
                labelPosition={item.labelPosition ?? labelPosition}
              />
            )
          })}
        </RadioGroupList>
      </RadioGroupProvider>
    </RadioGroupContainer>
  )
}

export default RadioGroup
