import { LabelPositions } from '@/atoms/Label/Types'
import { RadioProps } from '../Radio/Radio.types'

type CustomProps = {
  /**
   * The value to define label position.
   */
  labelPosition?: LabelPositions
  /**
   * The element's text content.
   */
  label: string
  /**
   * The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).
   */
  id: string
  /**
   * The value of the radio button, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#value).
   */
  value: string
  'data-testid'?: string
}
export type RadioButtonProps = CustomProps & Omit<RadioProps, keyof CustomProps>
