const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths');

const plugins = [
  new HtmlWebpackPlugin({
    title: 'webpack babel react revisited',
    filename: path.join(paths.appDist, 'index.html'),
  }),
];

const config = {
  entry: {
    app: path.join(paths.appSrc, 'app'),
  },
  output: {
    path: paths.appDist,
    filename: 'assets/js/[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins,
};

module.exports = config;