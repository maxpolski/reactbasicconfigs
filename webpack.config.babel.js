import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const distDir = path.join(__dirname, 'dist');

export default {
  devServer: {
    host: 'localhost',
    port: 8080,
  },
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'static/index.html',
    }),
  ]
}
