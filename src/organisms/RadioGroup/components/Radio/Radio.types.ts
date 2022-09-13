import { AriaRadioProps } from '@react-aria/radio'

export enum RadioCheckedState {
  checked = 'checked',
  unchecked = 'unchecked'
}

export enum RadioDisabledState {
  disabled = 'disabled',
  enabled = 'enabled'
}

export type BaseRadioProps = {
  checkedState: RadioCheckedState
  disabledState: RadioDisabledState
  isFocused: boolean
}

type CustomProps = {
  /**
   * The value of the radio button, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#value).
   */
  value: string
  /**
   * The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).
   */
  id?: string
  /**
   * Defines a string value that labels the current element.
   */
  'aria-label'?: string
}
export type RadioProps = CustomProps & Omit<AriaRadioProps, keyof CustomProps>
