const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {

  entry: './src/root.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

   plugins: [
     new HtmlWebpackPlugin({
       template: './src/index.html'
     })
   ],

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9002
  }
}
