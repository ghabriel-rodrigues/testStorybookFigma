import React from 'react'
import styled from 'styled-components'

const TickSVG = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 3px;
`

const Tick = (): React.ReactElement => {
  return (
    <TickSVG viewBox="0 0 24 24" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </TickSVG>
  )
}

export default Tick
