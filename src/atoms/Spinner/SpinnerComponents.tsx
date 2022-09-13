import { DsColorPrimaryBlueDark } from '@/tokens/tokens'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  100%{
    transform: rotate(360deg);
  }
`

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35;
  }

  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124;
  }
`

export const CircularProgressSVG = styled.svg`
  position: relative;
  height: 2.5em;
  width: 2.5em;
  animation: ${rotate} 1.4s linear infinite;
`

export const CircularProgressCircle = styled.circle`
  stroke-dasharray: 1.2;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  stroke: ${DsColorPrimaryBlueDark};
  animation: ${dash} 1.4s ease-in-out infinite;
`
