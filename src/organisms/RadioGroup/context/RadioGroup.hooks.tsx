import {
  AriaRadioGroupProps,
  useRadioGroup as useRadioGroupRA
} from '@react-aria/radio'
import { RadioGroupProps, useRadioGroupState } from '@react-stately/radio'

export const useRadioGroup = (props: AriaRadioGroupProps & RadioGroupProps) => {
  const valuesState = useRadioGroupState(props)
  const values = useRadioGroupRA(props, valuesState)

  return { ...values, state: valuesState }
}
