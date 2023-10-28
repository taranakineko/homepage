// rollup.config.mjs
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import summary from 'rollup-plugin-summary';
import copy from 'rollup-plugin-copy'

export default {
  input: [
    'src/main-test.js',
  ],
  plugins: [
    copy({
      targets: [
        { src: 'source/*', dest: 'build'}
      ]}),
    resolve(),
    summary(),
    terser({
      format: {
        comments: false
      }
    }),
  ],
  output: {
    dir: 'build/src',
  },
};