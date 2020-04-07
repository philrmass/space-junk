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
        use: [
          'file-loader?outputPath=./data/textures/',
        ],
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
