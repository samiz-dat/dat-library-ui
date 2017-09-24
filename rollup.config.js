import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import copy from 'rollup-plugin-copy';
// import test from './rollup-plugin-test';
import vueSvg from 'rollup-plugin-vue-inline-svg';

export default {
  entry: 'src/main.js',
  format: 'es',
  // moduleName: 'dat-library-ui',
  plugins: [
    commonjs(),
    resolve({
      extensions: ['.js', '.json', '.vue', '.svg'],
      customResolveOptions: {
        moduleDirectory: 'node_modules',
      },
    }),
    vueSvg(),
    vue({
      css: './dist/styles.css',
      scss: true,
    }),
    copy({
      'node_modules/font-awesome/fonts': 'dist/fonts',
    }),
  ],
  dest: 'dist/bundle.js',
  external: ['lodash', 'prismjs'],
  sourceMap: process.env.NODE_ENV !== 'production',
};
