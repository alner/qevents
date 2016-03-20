import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { BASE_PATH, PUBLIC_PATH, COMPONENTS_PATH, TEMPLATES_PATH } from './base'

let config = {
  context: BASE_PATH,
  target: 'web',
  name: 'client',
  devtool: "eval-source-map",
  entry: {
    client: "./src/client"
  },
  output: {
    path: PUBLIC_PATH,
    filename: "[name].[hash].js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      components: COMPONENTS_PATH
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel"
      },
      {
        test: /\.css$/,
        loader: "style!css?modules!postcss"
      }
    ]
  },
  postcss: [
    require("autoprefixer")
  ],
  plugins: [
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