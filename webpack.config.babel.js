import path from 'path';

const distDir = path.join(__dirname, 'dist');

export default {
  entry: './src/index',
  output: {
    path: distDir,
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
    }],
  }
}
