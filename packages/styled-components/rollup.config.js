import { getRollupConfig } from '../../config/rollup'
import pkg from './package.json'

export default getRollupConfig({
  pwd: __dirname,
  buildName: 'xstyled-styled-components',
  name: 'xstyled',
  pkg,
  globals: {
    react: 'React',
    '@xstyled/system': 'xstyledSystem',
    'styled-components': 'styled',
  },
})
