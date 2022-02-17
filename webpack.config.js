const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
  },

  devServer: {
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
    open: true,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },

      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],
}
