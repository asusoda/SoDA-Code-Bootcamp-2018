const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  devtool: 'eval-source-map',
  target: 'node',
  entry: ['./src/index.ts'],
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'awesome-typescript-loader'
        }
      }
    ]
  },
  node: {
    __dirname: false
  }
};
