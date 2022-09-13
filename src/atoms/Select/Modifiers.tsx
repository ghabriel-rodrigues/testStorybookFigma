/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DsColorGraySpaceGray,
  DsColorGraySnow,
  DsColorPrimaryBlue,
  DsColorGrayBlackboard,
  DsColorGrayPolarExtraLight,
  DsColorGraySmokeExtraLight,
  DsColorPrimaryBlueLight,
  DsFontSizeBase,
  DsColorGrayPolar,
  DsSpacingXs,
  DsBorderRadius,
  DsBorderWidth
} from '@tokens/tokens'

/**
 * Orientations about react-select keys to style

 * container - first component wrapper
 * control - main dropdown wrapper
 * dropdownIndicator - element that able user to interact (open and close component)with click
 * input - component that enable user to find itens in Dropdown
 * indicatorContainer - Wrapper bellow of indicatorsContainer container
 * indicatorsContainer - main wrapper that contains dropdownIndicator
 * indicatorSeparator - Icon between input area and dropdownIndicator
 * placeholder - Text that works as a placeholder in Dropdown component
 * menu - first menu list wrapper
 * menuList - main menu options component
 * option - each one options in Dropdown
 * singleValue - Wrapper bellow of valueContainer container
 * valueContainer - First wrapper that shows the selected option (and placeholder)
 *
 * Use menuIsOpen prop in order to help and orientate to show DOM content
 */

const customStyles = {
  container: (provided: any) => ({
    ...provided,
    borderRadius: DsBorderRadius,
    width: '100%'
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: DsColorGraySnow,
    border:
      state.isFocused || state.menuIsOpen
        ? `${DsBorderWidth} solid ${DsColorPrimaryBlue}`
        : `${DsBorderWidth} solid ${DsColorGraySmokeExtraLight}`,
    cursor: 'pointer',
    boxShadow: state.isFocused && `0 0 0 2px ${DsColorPrimaryBlueLight}`,
    ':hover': {
      borderColor: DsColorGraySmokeExtraLight
    }
  }),
  dropdownIndicator: (provided: any, state: any) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
    color: DsColorGraySpaceGray,
    ':hover': {
      color: DsColorGraySpaceGray
    }
  }),
  input: () => ({
    height: '100%',
    cursor: 'pointer'
  }),
  indicatorContainer: (provided: any) => ({
    ...provided,
    color: DsColorGraySpaceGray
  }),
  indicatorsContainer: (provided: any) => ({
    ...provided,
    padding: '0',
    paddingRight: '2px'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: DsColorGraySpaceGray,
    fontSize: DsFontSizeBase,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    lineHeight: '16px',
    margin: '0'
  }),
  menu: (provided: any) => ({
    ...provided,
    marginTop: DsSpacingXs
  }),
  menuList: (provided: any) => ({
    ...provided,
    maxHeight: '170px',
    color: DsColorGrayBlackboard,
    fontSize: DsFontSizeBase,
    padding: '0'
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    overflow: 'hidden',
    cursor: 'pointer',
    textOverflow: 'ellipsis',
    whitespace: 'nowrap',
    borderTop: `${DsBorderWidth} solid ${DsColorGrayPolar}`,
    padding: '10px',
    backgroundColor:
      state.isSelected || state.isFocused
        ? DsColorGrayPolarExtraLight
        : DsColorGraySnow,
    fontWeight: state.isSelected || state.isFocused ? '700' : '400',
    color: DsColorGrayBlackboard,
    lineHeight: '21px',
    ':hover': {
      fontWeight: '700',
      backgroundColor: DsColorGrayPolarExtraLight
    }
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: DsColorGraySpaceGray,
    fontSize: DsFontSizeBase,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    lineHeight: '16px'
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    padding: '0',
    paddingLeft: '10px'
  })
}

export default customStyles
