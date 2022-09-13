import styled from 'styled-components'
import Input, { InputProps } from '@/atoms/Input/Input'
import {
  DsBorderWidth,
  DsColorGrayPolarExtraLight,
  DsColorGraySpaceGray,
  DsColorPrimaryBlueLight
} from '@/tokens/tokens'

export const SearchInput = styled(Input)<InputProps>`
  width: 100%;
  border-radius: 0.2rem 0 0 0.2rem;
  border-color: ${DsColorGraySpaceGray};
  border-top: ${DsBorderWidth} solid;
  border-right: 0;
  border-left: ${DsBorderWidth} solid;
  border-bottom: ${DsBorderWidth} solid;
`

export const SearchButton = styled.button`
  box-sizing: border-box;
  padding: 0.4rem;
  border-radius: 0 0.2rem 0.2rem 0;
  border: ${DsBorderWidth} solid ${DsColorGraySpaceGray};
  background-color: ${DsColorGrayPolarExtraLight};
  cursor: pointer;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 0.1rem ${DsColorPrimaryBlueLight};
  }

  svg {
    height: 1.9rem;
    width: 1.9rem;
  }
`

export const SearchWrapper = styled.div`
  display: flex;
`
