import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

import packageJson from '../../../package.json'

const plugins = [
  peerDepsExternal({ includeDependencies: true }),
  resolve(),
  commonjs(),
  typescript(),
  terser()
]

export default {
  plugins,
  input: './src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true
    },
    {
      name: 'DesignSystemV2',
      file: packageJson.browser,
      format: 'umd',
      sourcemap: true
    }
  ]
}
