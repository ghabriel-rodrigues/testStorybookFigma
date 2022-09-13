import { DsFontFamilyMain } from '@tokens/tokens'
import { createGlobalStyle } from 'styled-components'

const Fonts = createGlobalStyle`

  @font-face {
    font-family: 'Lato';
    font-weight: normal;
    font-display: swap;
    src: url('//gupy-statics-front.s3.amazonaws.com/site/static/fonts/Lato-Regular.ttf')
      format('truetype');
  }
  @font-face {
    font-family: 'Lato';
    font-weight: bold;
    font-display: swap;
    src: url('//gupy-statics-front.s3.amazonaws.com/site/static/fonts/Lato-Bold.ttf')
      format('truetype');
  }
  
  * {
    font-family: ${DsFontFamilyMain};
  }
`

export default Fonts
