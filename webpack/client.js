import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { BASE_PATH, PUBLIC_PATH, COMPONENTS_PATH, CONTAINERS_PATH,
  ACTIONS_PATH, TEMPLATES_PATH } from './base'
import { BABEL_LOADER, STYLE_LOADER } from './base'

let config = {
  context: BASE_PATH,
  target: 'web',
  name: 'client',
  devtool: "eval-source-map",
  entry: {
    vendor: ["react", "react-dom", "react-router"],
    client: "./src/client"
  },
  output: {
    path: PUBLIC_PATH,
    filename: "[name].[hash].js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      components: COMPONENTS_PATH,
      containers: CONTAINERS_PATH,
      actions: ACTIONS_PATH
    }
  },
  module: {
    loaders: [
      BABEL_LOADER,
      STYLE_LOADER
    ]
  },
  postcss: [
    require("autoprefixer")
  ],
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "vendor.js"
    }),
    new HtmlWebpackPlugin({
      template: TEMPLATES_PATH.INDEX,
      RootContent: ''
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: PUBLIC_PATH,
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
}

if (process.env.NODE_ENV === 'production') {
  // client config
  config.devtool = false;
  config.plugins = [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "vendor.js"
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({comments: false}),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')}
    }),
    new HtmlWebpackPlugin({
      template: TEMPLATES_PATH.INDEX,
      filename: path.join(".", "views", "index.hbs"), // see config output path
      RootContent: '{{{root}}}' // for server-side rendering
    })
  ];
};

export default config
