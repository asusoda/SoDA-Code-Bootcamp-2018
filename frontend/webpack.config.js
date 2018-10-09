const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  target: 'web',
  entry: ['./src/components/index.tsx'],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'awesome-typescript-loader'
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      filename: 'index.html'
    })
  ]
};
