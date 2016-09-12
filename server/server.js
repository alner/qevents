import express from 'express'
import hbs from 'express-handlebars'
import path from 'path'
import config from './config.json'
import serverApp from './server.app'

// Webpack Requirements
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import * as webpackBase from '../webpack/base'
import webpackConfig from '../webpack/client'

const app = express()

if (process.env.NODE_ENV === 'development') {
    const compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler, {
      contentBase: webpackBase.PUBLIC_PATH,
      headers: { 'Access-Control-Allow-Origin': '*' },
      historyApiFallback: true,
      hot: true,
      noInfo: false,
      publicPath: webpackConfig.output.publicPath,
      // proxy: {
      //   '*': 'http://' + host + ':' + appPort
      // }
    }));
    app.use(webpackHotMiddleware(compiler));
}

// set template engine (handlebars)
app.engine('hbs', hbs({
  defaultLayout: false,
  extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './public/views/');

app.use(express.static(path.resolve(__dirname, '../public')));

// loading the app-middleware
//app.use(require('./server.app'));
app.use(serverApp);
// if(process.env.NODE_ENV === 'production') {
//   app.use(require('./server.app'));
// } else {
//   app.use(require('../src/server'));
// }

// app.get('/', (request, response) => {
//   response.end('Hello express!')
// })
const port = process.env.PORT || config.port;
const server = app.listen(port, () => console.log(`http://localhost:${port}`))
