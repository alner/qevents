import fs from 'fs'
import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { BASE_PATH, SRC_PATH, SERVER_PATH, COMPONENTS_PATH, CONTAINERS_PATH,
  ACTIONS_PATH } from './base'
import { BABEL_LOADER, JSON_LOADER, ISO_STYLE_LOADER } from './base'

let config = {
  context: BASE_PATH,
  name: 'server',
  target: 'node',
  entry: "./src/server.js",
  output: {
    path: SERVER_PATH,
    filename: "server.app.js",
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      components: COMPONENTS_PATH,
      containers: CONTAINERS_PATH,
      actions: ACTIONS_PATH
    },
    modulesDirectories: ['node_modules'],
  },
  externals: fs.readdirSync('node_modules').filter(x => x !== '.bin'),
  module: {
    loaders: [
      BABEL_LOADER,
      JSON_LOADER,
      ISO_STYLE_LOADER
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({'process.env.BROWSER': false }),
   // Define free variables
   // https://webpack.github.io/docs/list-of-plugins.html#defineplugin
   // new webpack.DefinePlugin({ ...GLOBALS, 'process.env.BROWSER': false }),

   // Adds a banner to the top of each generated chunk
   // https://webpack.github.io/docs/list-of-plugins.html#bannerplugin
   //new webpack.BannerPlugin('require("source-map-support").install();',
   //   { raw: true, entryOnly: false }),
 ],

 node: {
   console: false,
   global: false,
   process: false,
   Buffer: false,
   __filename: false,
   __dirname: false,
 },

 devtool: 'source-map',
}

if (process.env.NODE_ENV === 'production') {
  // server config
  config.devtool = false;
};

export default config
