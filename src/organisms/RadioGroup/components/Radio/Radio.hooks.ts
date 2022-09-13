import { RadioContext } from '@/organisms/RadioGroup/context/RadioGroup.provider'
import { AriaRadioProps, useRadio as useRadioRA } from '@react-aria/radio'
import { useContext } from 'react'

export const useRadioGroupContext = () => {
  const values = useContext(RadioContext)
  if (!values || Object.keys(values).length === 0)
    throw new Error('Radio should be used inside RadioGroupProvider')
  return values
}

export const useRadio = (
  props: AriaRadioProps,
  ref: React.RefObject<HTMLInputElement>
) => {
  const state = useRadioGroupContext()
  const values = useRadioRA(props, state, ref)

  return values
}
