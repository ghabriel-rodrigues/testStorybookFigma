import React from 'react'
import styled, { css } from 'styled-components'
import { useListBox, useOption } from '@react-aria/listbox'
import { ComboBoxState } from '@react-stately/combobox'
import { ComboBoxItem } from '../SearchComboBox.types'
import {
  DsBorderWidth,
  DsColorGrayBlackboard,
  DsColorGrayPolarLight,
  DsColorGraySnow,
  DsColorPrimaryBlue,
  DsFontSizeLg,
  DsScreenSm
} from '@/tokens/tokens'

const List = styled.ul`
  margin-top: 1.5rem;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  background-color: ${DsColorGraySnow};

  @media (min-width: ${DsScreenSm}) {
    margin-top: 0.4rem;
    box-shadow: ${DsBorderWidth} ${DsBorderWidth} 0.2rem 0 rgba(0, 0, 0, 0.1);
    border-radius: 0.2rem;
  }
`

const ListItem = styled.li<{ isFocused: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem;
  font-size: ${DsFontSizeLg};
  cursor: pointer;
  color: ${DsColorPrimaryBlue};

  @media (min-width: ${DsScreenSm}) {
    border: ${DsBorderWidth} solid ${DsColorGrayPolarLight};
    color: ${DsColorGrayBlackboard};
  }

  &:first-child {
    border-radius: 0.2rem 0.2rem 0 0;
  }

  &:last-child {
    border-radius: 0 0 0.2rem 0.2rem;
  }

  ${({ isFocused }) =>
    isFocused &&
    css`
      && {
        outline: ${DsBorderWidth} solid ${DsColorGrayBlackboard};
      }
    `}

  svg {
    color: ${DsColorPrimaryBlue};
  }
`

const IconLeftWrap = styled.div`
  display: flex;
  align-items: center;
`

const IconLeft = styled.div`
  margin-right: 0.8rem;
`

const Text = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const ListBox: React.FC<any> = (props) => {
  const ref = React.useRef<HTMLUListElement>(null)
  const { listBoxRef = ref, state } = props
  const { listBoxProps } = useListBox(props, state, listBoxRef)

  return (
    <List {...listBoxProps} ref={listBoxRef}>
      {[...state.collection].map((item) => (
        <Option key={item.key} item={item} state={state} />
      ))}
    </List>
  )
}

interface OptionProps {
  item: {
    key: string
    rendered: string
    value: {
      iconLeft?: React.ReactElement
      iconRight?: React.ReactElement
    }
  }
  state: ComboBoxState<ComboBoxItem>
}

const Option: React.FC<OptionProps> = ({ item, state }) => {
  const ref = React.useRef<HTMLLIElement>(null)
  const { optionProps, isFocused } = useOption({ key: item.key }, state, ref)

  return (
    <ListItem {...optionProps} ref={ref} isFocused={isFocused}>
      <IconLeftWrap>
        <IconLeft>{item.value.iconLeft}</IconLeft>
        <Text>{item.rendered}</Text>
      </IconLeftWrap>
      {item.value.iconRight}
    </ListItem>
  )
}
