import { css } from 'styled-components'
import {
  DsColorGrayPolar,
  DsColorGraySmoke,
  DsColorAlertDanger,
  DsColorPrimaryBlueSecondary,
  DsColorPrimaryBlueLight
} from '@tokens/tokens'

export const Focus = css`
  box-shadow: 0 0 0 2px ${DsColorPrimaryBlueLight};
  border-color: ${DsColorPrimaryBlueSecondary};
  outline: none;
`
export const Disabled = css`
  border-color: ${DsColorGrayPolar};
  color: ${DsColorGraySmoke};

  ::-webkit-input-placeholder {
    color: ${DsColorGraySmoke};
  }
  :-ms-input-placeholder {
    opacity: 1;
    color: ${DsColorGraySmoke};
  }
  ::placeholder {
    color: ${DsColorGraySmoke};
  }
`
export const Invalid = css`
  border-color: ${DsColorAlertDanger};
`
