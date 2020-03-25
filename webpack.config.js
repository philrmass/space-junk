module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    clientLogLevel: 'silent',
    port: 3000,
    hot: true,
  },
  devtool: 'source-map',
};
