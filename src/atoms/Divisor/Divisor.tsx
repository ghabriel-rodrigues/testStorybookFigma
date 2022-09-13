import { DsBorderWidth, DsColorGraySmokeExtraLight } from '@/tokens/tokens'
import styled from 'styled-components'

const Divisor = styled.hr.attrs(() => ({ 'aria-hidden': true }))`
  border-top: ${DsBorderWidth} solid ${DsColorGraySmokeExtraLight};
  border-left: none;
  border-bottom: none;
  border-right: none;
`

export default Divisor
