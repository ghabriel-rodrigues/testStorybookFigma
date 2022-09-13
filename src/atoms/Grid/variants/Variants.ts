import { DsSpacingMd, DsSpacingSm } from '@tokens/tokens'
import { variant } from 'styled-system'

const variants = variant({
  prop: 'variant',
  variants: {
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginLeft: [`-${DsSpacingSm}`, `-${DsSpacingMd}`],
      marginTop: [`-${DsSpacingSm}`, `-${DsSpacingMd}`],
      width: [`calc(100% + ${DsSpacingSm})`, `calc(100% + ${DsSpacingMd})`]
    },
    item: {
      'box-sizing': 'border-box',
      paddingLeft: [DsSpacingSm, DsSpacingMd],
      paddingTop: [DsSpacingSm, DsSpacingMd],
      flexGrow: 0
    }
  }
})

export default variants
