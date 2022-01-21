import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'index.js',
  output: {
    file: 'cjs/index.cjs',
    format: 'cjs',
    exports: 'default'
  },
  plugins: [
    resolve(),
    commonjs()
  ]
}
