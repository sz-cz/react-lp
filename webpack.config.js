const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
          {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
          },
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              publicPath: './src/',
              fallback: 'style-loader',
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: true,
                    minimize: true,
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    plugins: (loader) => [
                      new require('autoprefixer')()
                    ]
                  }
                },
            ]
            })
          },
          {
            test: /\.sass$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
          {
            test: /\.png$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '/images/[name].[ext]'
                }
            }
          }
        ]
      },
      resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
      },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist'
    },
    watch: true,
    devtool: 'source-map',
    plugins: [
      new ExtractTextPlugin('style.css'),
    ]
}