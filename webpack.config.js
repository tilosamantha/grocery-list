const path = require('path');
const source = path.join(__dirname, '/src');

module.exports = {
  entry: `${source}/index.js`,
  devtool: 'source-map',
  mode: 'development',
  resolve: {
    extensions: [
      '*', '.js', '.jsx'
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};