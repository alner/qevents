var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin')

var PATH = {
  DIST: "./dist",
  SERVER: "./server",
  PUBLIC_DIST: "./public",
  COMPONENTS: path.resolve(__dirname, "src", "components"),
  TEMPLATES: {
    INDEX: path.resolve(__dirname, "src", "templates", "index.tmpl.html")
  }
}

var config = {
  context: __dirname,
  target: 'web',
  name: 'client',
  devtool: "eval-source-map",
  entry: {
    client: "./src/client"
  },
  output: {
    path: PATH.PUBLIC_DIST,
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
    contentBase: PATH.PUBLIC_DIST,
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
}

var serverConfig = {
  context: __dirname,
  name: 'server',
  target: 'node',
  entry: "./src/server.js",
  output: {
    path: PATH.SERVER,
    filename: "server.app.js",
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      components: PATH.COMPONENTS
    },
    modulesDirectories: ['node_modules'],
    // modulesDirectories: [
    //   "src", "node_modules"
    // ]
  },
  externals: [
    function filter(context, request, cb) {
      const isExternal =
        request.match(/^[@a-z][a-z\/\.\-0-9]*$/i)
        && !request.match(/^components/)
        //&&
        //(
          //request.match(/^react/) ||
          //request.match(/^react-router/) ||
          //request.match(/^react-dom/)
        //)
        //!request.match(/^react-router/) &&
        //!context.match(/[\\/]react-router/);
      cb(null, Boolean(isExternal));
    },
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        loader: "babel"
      },
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.css$/,
        loaders: [
          "isomorphic-style-loader",
          "css"          
        ]
      }
    ]
  },
  plugins: [
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
  // client config
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

  // server config
  serverConfig.devtool = false;
};

module.exports = [config, serverConfig] // , serverConfig
