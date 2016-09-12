require('babel-register')
require('babel-polyfill')
require('./server')
console.log(process.env.NODE_ENV)
/*
{
    "plugins": [
      [
        "babel-plugin-webpack-loaders",
        {
          "config": "../webpack/server",
          "verbose": false
        }
      ]
    ]
}
*/
//server.listen(3000, () => console.log('http://localhost:3000'))
