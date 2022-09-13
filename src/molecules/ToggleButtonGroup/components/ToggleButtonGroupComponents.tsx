import styled from 'styled-components'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'

import { DsSpacingSm } from '@/tokens/tokens'

export const Wrapper = styled.div`
  line-height: 1.5;
  label {
    margin-bottom: ${DsSpacingSm};
  }
`

const StyledToggleGroup = styled(ToggleGroupPrimitive.Root)`
  display: flex;

  button {
    margin-left: ${DsSpacingSm};
    width: 100%;
    text-align: center;

    &:first-child {
      margin-left: 0;
    }
  }
`

export const ToggleGroup = StyledToggleGroup
