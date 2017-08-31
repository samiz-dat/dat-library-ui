import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import copy from 'rollup-plugin-copy';

export default {
  entry: 'src/main.js',
  format: 'es',
  // moduleName: 'dat-library-ui',
  plugins: [
    commonjs(),
    resolve({
      extensions: ['.js', '.json', '.vue'],
      customResolveOptions: {
        moduleDirectory: 'node_modules',
      },
    }),
    vue({
      css: './dist/styles.css',
      scss: true,
    }),
    copy({
      'node_modules/font-awesome/fonts': 'dist/fonts',
    }),
  ],
  dest: 'dist/bundle.js',
  external: ['lodash'],
  sourceMap: process.env.NODE_ENV !== 'production',
};
