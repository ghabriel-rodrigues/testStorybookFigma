import { variant } from 'styled-system'

const sharedAttributes = {
  display: 'flex'
}

const RadioGroupListCSS = variant({
  prop: 'orientation',
  variants: {
    horizontal: {
      flexDirection: 'row',
      ...sharedAttributes
    },
    vertical: {
      flexDirection: 'column',
      ...sharedAttributes
    }
  }
})

export default RadioGroupListCSS
