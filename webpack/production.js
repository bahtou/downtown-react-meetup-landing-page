const path = require('path');
const webpack = require('webpack');

const cssImport = require('postcss-import');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const { cssPaths, postcssPaths } = require('./base-params');

module.exports = {
  mode: 'production',

  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        include: cssPaths,
        use: [
          ExtractCssChunks.loader,
          {
            loader: 'css-loader',
            options: {
              url: true,
              import: false,
              modules: {
                mode: 'local',
                // localIdentName: '[folder]__[local]--[hash:base64:10]',
                // localIdentName: '[path][name]__[local]--[hash:base64:5]',
                localIdentName: '[local]:[hash:base64:5]',
                context: path.resolve(__dirname, 'src'),
                hashPrefix: 'custom-hash'
                // getLocalIdent: https://github.com/webpack-contrib/css-loader#getlocalident
                // localIdentRegExp: https://github.com/webpack-contrib/css-loader#localidentregexp
              },
              sourceMap: true,
              importLoaders: 1,
              localsConvention: 'camelCase', // https://github.com/webpack-contrib/css-loader#localsconvention
              onlyLocals: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              ident: 'postcss',
              plugins: loader => [
                cssImport({
                  root: postcssPaths,
                  path: ['assets', 'components', 'elements', 'sections'],
                  skipDuplicates: true
                }),
                require('precss') // SASS-like markup,
              ]
            }
          }
        ]
      }
    ]
  },

  optimization: {
    namedModules: false,
    namedChunks: false,
    nodeEnv: 'production',
    flagIncludedChunks: true,
    occurrenceOrder: true,
    sideEffects: true,

    providedExports: true,
    usedExports: true,
    concatenateModules: true,

    noEmitOnErrors: true,
    minimize: true,
    checkWasmTypes: true,

    runtimeChunk: {
      name: 'manifest'
    },

    splitChunks: {
      hidePathInfo: true,
      chunks: 'all',
      minChunks: 1,
      minSize: 10000,
      maxSize: 0,
      maxAsyncRequests: 7,
      maxInitialRequests: 5,
      automaticNameDelimiter: '~',
      name: false,
      cacheGroups: {
        default: false,
        vendors: false,

        vendor: {
          name: 'vendor',
          // test: /[\\/]node_modules[\\/](react|react-dom|core-js|react-hot-loader)[\\/]/,
          test: /node_modules/,
          chunks: 'all',
          priority: 20,
          // filename: '[name].vendor-bundle.js',
          enforce: true
        },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          priority: 10,
          reuseExistingChunk: true,
          enforce: true
        }
      }
    }
  },
  performance: {
    hints: 'warning'
  },

  plugins: [
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      minRatio: 0.8,
      threshold: 10240
    }),

    new HtmlWebpackPlugin({
      title: 'react ❤ webpack',
      template: 'index.html',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        ['My App']: 'Barebones foundation to quickly start building your web applications'
      },
      minify: true,
      // minify: {
      //   collapseWhitespace: true,
      //   removeComments: true,
      //   removeRedundantAttributes: true,
      //   removeScriptTypeAttributes: true,
      //   removeStyleLinkTypeAttributes: true,
      //   useShortDoctype: true
      // },
      inject: true,
      hash: true,
      cache: true,
      showErrors: true,
      chunksSortMode: 'dependency'
    }),

    new CleanWebpackPlugin(),
    // new InlineManifestWebpackPlugin('manifest'),

    new CaseSensitivePathsPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new TerserPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,        // Must be set to true if using source-maps in production
      extractComments: false, // Pairs with output:{ comments: false } -> change to 'true' to see LICENSEs
      terserOptions: {        // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        ecma: undefined,
        warnings: false,
        parse: {},
        compress: {           // https://github.com/terser-js/terser#compress-options
          drop_console: true,
          drop_debugger: true
        },
        mangle: true,         // Note `mangle.properties` is `false` by default.
        module: false,
        output: {
          comments: false,
        },
        toplevel: false,
        nameCache: null,
        ie8: false,
        keep_classnames: undefined,
        keep_fnames: false,
        safari10: false,
      }
    })
  ]
};

