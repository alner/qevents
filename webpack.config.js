require('babel-core/register')

var path = require('path')
var clientConfig = require(path.resolve(__dirname, 'webpack', 'client')).default;
var serverConfig = require(path.resolve(__dirname, 'webpack', 'server')).default;

module.exports = [
  clientConfig,
  serverConfig
]
