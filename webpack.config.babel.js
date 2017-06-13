import path from 'path';
import ProgressBarWebpackPlugin from 'progress-bar-webpack-plugin';

const dirSrc = path.resolve(__dirname, './src');
const dirBuild = path.resolve(__dirname, './dist');

export default {
  devtool: 'eval',
  entry: [
    path.resolve(dirSrc, './index.js'),
  ],
  output: {
    path: dirBuild,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?/,
        exclude: /node_modules/,
        query: {
          presets: [
            'es2015',
            'stage-0',
            'react',
          ],
        },
      },
    ],
  },
  plugins: [
    new ProgressBarWebpackPlugin({
      clear: false,
    }),
  ],
  stats: {
    colors: true,
  },
};
