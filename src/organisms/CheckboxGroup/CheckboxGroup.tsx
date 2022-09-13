import React, { InputHTMLAttributes } from 'react'
import { nanoid } from 'nanoid'
import styled from 'styled-components'

import CheckboxLabel, {
  CheckboxLabelProps
} from '@molecules/CheckboxLabel/CheckboxLabel'
import InputHelperMessage from '@atoms/InputHelperMessage/InputHelperMessage'
import { HelperMessageCSS } from './CheckboxGroup.styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  items: CheckboxLabelProps[]

  disableAll?: boolean
  errorMessage?: string
  labelFirst?: boolean
  name?: string
}

const HelperMessage = styled(InputHelperMessage)`
  ${HelperMessageCSS}
`

const CheckboxGroup: React.FC<Props> = ({ ...props }) => {
  const { disableAll, errorMessage, id, items, name, labelFirst } = props

  return (
    <>
      {items.map((item) => {
        const uuid = nanoid()

        return (
          <CheckboxLabel
            checked={item.checked}
            disabled={item.disabled || disableAll}
            id={`${id}-${uuid}`}
            key={uuid}
            label={item.label}
            labelPosition={labelFirst ? 'start' : 'end'}
            name={`${name || id}-${uuid}`}
            value={item?.value || ''}
          />
        )
      })}
      {errorMessage && (
        <HelperMessage id={`${id}-description`} hasError={true}>
          {errorMessage}
        </HelperMessage>
      )}
    </>
  )
}

export default CheckboxGroup
