import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import vue from 'rollup-plugin-vue';

export default {
  entry: 'src/main.js',
  format: 'cjs',
  plugins: [
    commonjs(),
    resolve({
      extensions: ['.js', '.json', '.vue'],
    }),
    vue({
      css: './dist/styles.css',
      scss: true,
    }),
  ],
  dest: 'dist/bundle.js',
  sourceMap: process.env.NODE_ENV !== 'production',
};
