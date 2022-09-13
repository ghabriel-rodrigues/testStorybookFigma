import { LabelPositions } from '@/atoms/Label/Types'
import { AriaRadioGroupProps } from '@react-aria/radio'
import { RadioGroupProps as ReactStatelyRadioGroupProps } from '@react-stately/radio'
import { RadioButtonProps } from './components/RadioButton/RadioButton.types'

export type RadioGroupListProps = Pick<AriaRadioGroupProps, 'orientation'>

type CustomProps = {
  /**
   * list with props for each RadioButton rendered inside it.
   */
  items: RadioButtonProps[]
  /**
   * The value to define label position.
   */
  labelPosition?: LabelPositions
  /**
   * The element's text content from legend.
   */
  label: string
  /**
   * The name of the RadioGroup, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name_and_radio_buttons).
   */
  name: string
  /**
   * The default value (uncontrolled).
   */
  defaultValue?: string
  /**
   * The current value (controlled).
   */
  value?: string
  /**
   * Handler that is called when the value changes.
   */
  onChange?: ((value: string) => void) | undefined
  /**
   * Whether the input is disabled.
   */
  isDisabled?: boolean
  /**
   * Whether the input can be selected but not changed by the user.
   */
  isReadOnly?: boolean
  /**
   * Whether user input is required on the input before form submission. Often paired with the necessityIndicator prop to add a visual indicator to the input.
   */
  isRequired?: boolean
  /**
   * The axis the Radio Button(s) should align with.
   * @default 'vertical'
   */
  orientation?: 'horizontal' | 'vertical'
}
export type RadioGroupProps = CustomProps &
  Omit<AriaRadioGroupProps, keyof CustomProps> &
  Omit<ReactStatelyRadioGroupProps, keyof CustomProps>
