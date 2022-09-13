import React from 'react'
import styled from 'styled-components'
import InputMask from 'react-input-mask'

import Input from '@atoms/Input/Input'
import {
  InputPaddingLeftCSS,
  IconVerticalPositionCSS,
  LabelComponentCSS,
  HelperMessageCSS,
  IconCSS,
  IconLeftCSS,
  IconRightCSS,
  WrapperCSS
} from './InputText.styles'
import Label from '@atoms/Label/Label'
import InputHelperMessage from '@atoms/InputHelperMessage/InputHelperMessage'

import {
  IconsType,
  IconPositions,
  IconVerticalPositions,
  InputLeftPaddings
} from './components/types'

/* TODO
  - Add inline behavior and styles
  - Add readOnly behavior and styles
  - Add warning behavior and styles
  - Add info (success and hint) behavior and styles
  - Add external prop to receive value (today we are able to receive props as soon as needed)
  - Add behavior to set a color case has filled value
  - Add possibility to render tip (as a simple text and with icon as well)
  - Add behavior to receive validation object and configurations
  - Add behavior to render infotip side by side with label
  - Add behavior to pass mask in order to fill input
  - Add behavior to receive these props
    - min, max, minLength e maxLength
*/

export interface InputTextProps {
  id: string
  label: string
  placeholder: string
  disabled?: boolean
  hasError?: boolean
  helperMessage?: string
  mask?: string
  icons?: IconsType
  iconPosition?: string
}

interface IconProps {
  verticalPosition: IconVerticalPositions
}

const Wrapper = styled.div`
  ${WrapperCSS}
`

const LabelComponent = styled(Label)`
  ${LabelComponentCSS}
`

const InputComponent = styled(Input)`
  ${InputPaddingLeftCSS}
`

const Icon = styled.i`
  ${IconCSS}
`

const IconLeft = styled(Icon)<IconProps>`
  ${IconLeftCSS}
  ${IconVerticalPositionCSS}
`

const IconRight = styled(Icon)<IconProps>`
  ${IconRightCSS}
  ${IconVerticalPositionCSS}
`

const HelperMessage = styled(InputHelperMessage)`
  ${HelperMessageCSS}
`

const hasIconLeft = (icons: IconsType, position: string): boolean =>
  Array.isArray(icons) &&
  icons.length > 0 &&
  (position === IconPositions.LEFT || position === IconPositions.BOTH)

const hasIconRight = (icons: IconsType, position: string): boolean =>
  Array.isArray(icons) &&
  icons.length > 0 &&
  (position === IconPositions.RIGHT || position === IconPositions.BOTH)

const InputText: React.FC<InputTextProps> = ({
  id,
  label,
  placeholder,
  helperMessage,
  disabled = false,
  hasError = false,
  icons = [],
  iconPosition = IconPositions.LEFT,
  mask,
  ...props
}) => {
  const inputComponentProps = {
    placeholder,
    disabled,
    hasError,
    id,
    paddingLeft:
      icons?.length &&
      (iconPosition === IconPositions.LEFT ||
        iconPosition === IconPositions.BOTH)
        ? InputLeftPaddings.LG
        : InputLeftPaddings.SM,
    ...(helperMessage && { ariaDescribedby: `${id}-description` }),
    ...props
  }

  return (
    <Wrapper>
      {label && (
        <LabelComponent htmlFor={id} {...props}>
          {label}
        </LabelComponent>
      )}
      {hasIconLeft(icons, iconPosition) && (
        <IconLeft
          verticalPosition={
            label ? IconVerticalPositions.BOTTOM : IconVerticalPositions.TOP
          }
          aria-hidden="true"
        >
          {icons[0]}
        </IconLeft>
      )}
      {mask ? (
        <InputMask mask={mask} {...inputComponentProps}>
          {(inputProps: InputTextProps) => <InputComponent {...inputProps} />}
        </InputMask>
      ) : (
        <InputComponent {...inputComponentProps} />
      )}
      {hasIconRight(icons, iconPosition) && (
        <>
          <IconRight
            verticalPosition={
              label ? IconVerticalPositions.BOTTOM : IconVerticalPositions.TOP
            }
            aria-hidden="true"
          >
            {iconPosition === IconPositions.RIGHT && icons[0]}
            {iconPosition === IconPositions.BOTH && icons[1]}
          </IconRight>
        </>
      )}
      {helperMessage && (
        <HelperMessage id={`${id}-description`} hasError={hasError}>
          {helperMessage}
        </HelperMessage>
      )}
    </Wrapper>
  )
}

export default InputText
