import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackConfig from '../webpack.config.dev'

const app = express()
const wpc = webpack(webpackConfig)

app.use(express.static('public'))
app.use(webpackMiddleware(wpc, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}))
app.use(webpackHotMiddleware(wpc))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(3000, () => console.log('Running on localhost:3000'))
