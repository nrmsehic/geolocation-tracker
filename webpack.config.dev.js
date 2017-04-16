import webpack from 'webpack'
import path from 'path'

export default {
  entry: [
    'whatwg-fetch',
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, './client/index.js')
  ],
  output: {
    filename: 'bundle.js',
    path: '/',
    publicPath: '/'
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        loaders: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
}
