import React from 'react'
import { useButton } from '@react-aria/button'
import { useComboBox } from '@react-aria/combobox'
import { useComboBoxState } from '@react-stately/combobox'
import type { ComboBoxProps } from '@react-types/combobox'
import { IconType } from '@/atoms/Icon/enums'
import Icon from '@/atoms/Icon/Icon'
import { Popover } from './components/Popover'
import { ListBox } from './components/Listbox'
import {
  SearchInput,
  SearchButton,
  SearchWrapper
} from './components/SearchComponents'
import { ComboBoxItem } from './SearchComboBox.types'

export interface SearchComboBoxProps extends ComboBoxProps<ComboBoxItem> {
  inputProps: { 'aria-label': string }
  buttonProps: { 'aria-label': string }
  onSubmit: (value: string) => void
  className?: string
}

export const SearchComboBox: React.FC<SearchComboBoxProps> = ({
  inputProps,
  buttonProps,
  onSubmit,
  className,
  ...props
}) => {
  const state = useComboBoxState(props)
  const inputRef = React.useRef(null)
  const listBoxRef = React.useRef(null)
  const popoverRef = React.useRef(null)
  const buttonRef = React.useRef(null)

  const { inputProps: searchInputProps, listBoxProps } =
    useComboBox<ComboBoxItem>(
      {
        ...props,
        inputRef,
        listBoxRef,
        popoverRef
      },
      state
    )

  const searchButtonProps = useButton(
    {
      type: 'submit'
    },
    buttonRef
  )

  const handleSubmit = React.useCallback(
    (event) => {
      event.preventDefault()
      onSubmit(searchInputProps.value as string)
    },
    [searchInputProps.value]
  )

  return (
    <form className={className} onSubmit={handleSubmit}>
      <SearchWrapper>
        <SearchInput {...searchInputProps} {...inputProps} ref={inputRef} />
        <SearchButton
          {...buttonProps}
          {...searchButtonProps}
          data-live-announcer="true"
          ref={buttonRef}
        >
          <Icon type={IconType.Search} />
        </SearchButton>
      </SearchWrapper>
      {state.isOpen && (
        <Popover
          popoverRef={popoverRef}
          isOpen={state.isOpen}
          onClose={state.close}
        >
          <ListBox {...listBoxProps} listBoxRef={listBoxRef} state={state} />
        </Popover>
      )}
    </form>
  )
}
