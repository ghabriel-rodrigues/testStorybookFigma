import { variant } from 'styled-system'

const iconBasicStructure = {
  display: 'flex',
  height: '12px',
  width: '12px'
}

const iconPosition = variant({
  prop: 'iconPosition',
  variants: {
    '': {
      position: 'absolute',
      ...iconBasicStructure
    },
    center: {
      position: 'absolute',
      ...iconBasicStructure
    },
    left: {
      paddingRight: '14px',
      ...iconBasicStructure
    },
    right: {
      paddingLeft: '14px',
      ...iconBasicStructure
    }
  }
})

export default iconPosition
