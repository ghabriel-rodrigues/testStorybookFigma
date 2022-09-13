import { ReactNode } from 'react'

export interface SwitchProps {
  /**
   * Defines a string value that labels the current element.
   */
  'aria-label'?: string
  /**
   * The label for the element.
   */
  label?: ReactNode
  /**
   * The label position.
   */
  labelFirst?: boolean
  /**
   * Whether the element should be selected (uncontrolled).
   */
  defaultSelected?: boolean
  /**
   * Whether the element should be selected (controlled).
   */
  checked?: boolean
  /**
   * Handler that is called when the element's selection state changes.
   */
  onChange?: (isSelected: boolean) => void
  /**
   * The value of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefvalue).
   */
  value?: string
  /**
   * The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).
   */
  name: string
  /**
   * id of the input element
   */
  id: string
  /**
   * Whether the input is disabled.
   */
  disabled?: boolean
  /**
   * Error message to display when the input is in an invalid state.
   */
  errorMessage?: string
}

export type SwitchContainerProps = {
  isFocused?: boolean
  labelFirst?: boolean
} & React.ComponentPropsWithRef<'label'>

export type SwitchToggleProps = {
  isChecked?: boolean
  isDisabled?: boolean
} & React.ComponentPropsWithRef<'span'>

export type SwitchThumbProps = SwitchToggleProps
