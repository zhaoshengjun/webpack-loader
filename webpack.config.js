const path = require('path');

module.exports = {
  entry: './src/test.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [{ test: /\.js$/, use: 'simple-loader', exclude: /node_mmodules/ }]
  },
  resolveLoader: {
    alias: {
      'simple-loader': path.join(__dirname, '/src/simple-loader.js')
    }
  }
};
