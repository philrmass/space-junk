module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          publicPath: '',
        },
      },
    ],
  },
  devServer: {
    contentBase: './dist',
    clientLogLevel: 'silent',
    port: 4000,
    hot: true,
  },
  devtool: 'source-map',
};
