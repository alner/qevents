var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
  context: __dirname,
  devtool: "eval-source-map",
  entry: {
    client: "./app/client"
  },
  output: {
    path: "./public",
    filename: "[name].[hash].js"
  },
  resolve: {
    alias: {
      components: path.join(__dirname, "app", "components")
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
      template: path.resolve(__dirname, "app", "index.tmpl.html")
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
}

if (process.env.NODE_ENV === 'production') {
  config.devtool = false;
  config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({comments: false}),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')}
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "app", "index.tmpl.html"),
      filename: path.join(".", "views", "index.hbs") // see config output path
    })
  ];
};

module.exports = config
