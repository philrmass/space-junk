const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          publicPath: 'space-junk',
          outputPath: 'space-junk',
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /\.module\.css$/,
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    port: 4000,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  infrastructureLogging: {
    level: 'error',
  },
};
