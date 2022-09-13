import { useCallback } from 'react'
import { MultiValueProps } from 'react-select'
import { Option } from '@atoms/Select/types'
import { IconType } from '@/atoms/Icon/enums'
import Icon from '@/atoms/Icon/Icon'
import {
  MultiValueWrapCSS,
  MultiValueTextCSS,
  MultiValueCloseButtonCSS
} from './Dropdown.styles'
import styled from 'styled-components'

const MultiValueWrap = styled.div`
  ${MultiValueWrapCSS}
`

const MultiValueText = styled.span`
  ${MultiValueTextCSS}
`

const MultiValueCloseButton = styled.button`
  ${MultiValueCloseButtonCSS}

  svg {
    height: 1rem;
  }
`

export const MultiValue: React.FC<MultiValueProps<Option>> = ({
  children,
  ...props
}) => {
  const handleClick = useCallback(() => {
    const currentValue = props.getValue()
    const newValue = currentValue.filter(
      ({ value }) => value !== props.data.value
    )
    props.setValue(newValue, 'deselect-option')
  }, [])

  return (
    <MultiValueWrap {...props}>
      <MultiValueText>{children}</MultiValueText>
      <MultiValueCloseButton
        onClick={handleClick}
        aria-label={`Remove ${children}`}
      >
        <Icon type={IconType.Close} aria-hidden="true" />
      </MultiValueCloseButton>
    </MultiValueWrap>
  )
}
