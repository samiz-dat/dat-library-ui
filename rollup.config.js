import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import vue from 'rollup-plugin-vue';

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
  ],
  dest: 'dist/bundle.js',
  external: ['lodash'],
  sourceMap: process.env.NODE_ENV !== 'production',
};
