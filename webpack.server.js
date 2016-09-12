process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var webpackBase = require('./webpack/base');
var webpackConfig = require('./webpack.config');
var serverConfig = require('./server/config.json');

var host = 'localhost';
var appPort = serverConfig.port || 3000;
var devServerPort = appPort + 1;

new WebpackDevServer(webpack(webpackConfig), {
  contentBase: webpackBase.PUBLIC_PATH,
  headers: { 'Access-Control-Allow-Origin': '*' },
  historyApiFallback: true,
  hot: true,
  noInfo: false,
  publicPath: webpackConfig.output.publicPath,
  proxy: {
    '*': 'http://' + host + ':' + appPort
  }
}).listen(devServerPort, host, function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Webpack Dev Server running at ' + host + ':' + devServerPort);
});
