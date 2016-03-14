var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin')

var PATH = {
  DIST: "./dist",
  COMPONENTS: path.join(__dirname, "src", "components"),
  TEMPLATES: {
    INDEX: path.resolve(__dirname, "src", "templates", "index.tmpl.html")
  }
}

var config = {
  context: __dirname,
  devtool: "eval-source-map",
  entry: {
    client: "./src/client"
  },
  output: {
    path: PATH.DIST,
    filename: "[name].[hash].js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      components: PATH.COMPONENTS
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
      template: PATH.TEMPLATES.INDEX,
      RootContent: ''
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: PATH.DIST,
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
      template: PATH.TEMPLATES.INDEX,
      filename: path.join(".", "views", "index.hbs"), // see config output path
      RootContent: '{{{root}}}' // for server-side rendering
    })
  ];
};

module.exports = config
