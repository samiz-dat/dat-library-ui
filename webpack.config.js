process.env.BABEL_ENV = 'main';

const path = require('path');
const webpack = require('webpack');

const BabiliWebpackPlugin = require('babili-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cssnext = require('postcss-cssnext');
const precss = require('precss');
const atImport = require('postcss-import');

const extractCSS = new ExtractTextPlugin('styles-lib.css');
const extractVueCSS = new ExtractTextPlugin('styles-vue.css');
/**
 * List of node_modules to include in webpack bundle
 *
 * Required for specific packages like Vue UI libraries
 * that provide pure *.vue files that need compiling
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/webpack-configurations.html#white-listing-externals
 */

const config = {
  devtool: '#cheap-module-eval-source-map',
  entry: path.join(__dirname, './sample-src/index.js'),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCSS.extract({ fallback: 'style-loader', use: ['css-loader'] }),
      },
      {
        test: /\.html$/,
        use: 'vue-html-loader',
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.node$/,
        use: 'node-loader',
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            extractCSS: process.env.NODE_ENV === 'production' && extractVueCSS,
            loaders: {
              sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax=1',
              scss: 'vue-style-loader!css-loader!sass-loader',
            },
            postcss: [
              atImport(),
              precss(),
              cssnext({
                browsers: ['last 2 versions'],
              }),
            ],
          },
        },
      },
      {
        test: /\.svg$/,
        exclude: [/fontawesome-webfont\.svg/],
        loader: 'vue-svg-loader',
      },
      {
        test: [/\.(woff2?|eot|ttf|otf)(\?.*)?$/, /fontawesome-webfont\.svg/],
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'fonts/[name].[ext]',
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'imgs/[name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    extractVueCSS,
    extractCSS,
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './sample-src/index.ejs'),
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './docs/'),
    // publicPath: process.env.NODE_ENV === 'production' ? './' : 'docs/',
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
    extensions: ['.js', '.vue', '.json', '.css', '.node'],
    enforceExtension: false,
  },
  target: 'web',
};

/**
 * Adjust rendererConfig for production settings
 */
if (process.env.NODE_ENV === 'production') {
  config.devtool = '';
  config.plugins.push(
    new BabiliWebpackPlugin({
      removeConsole: true,
      removeDebugger: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }));
}

module.exports = config;
