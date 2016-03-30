/*
var PATH = {
  DIST: "./dist",
  SERVER: "./server",
  PUBLIC_DIST: "./public",
  COMPONENTS: path.resolve(__dirname, "src", "components"),
  TEMPLATES: {
    INDEX: path.resolve(__dirname, "src", "templates", "index.tmpl.html")
  }
}
*/

import path from 'path'

export const BASE_PATH = path.resolve(__dirname, '..')
export const SRC_PATH = path.join(BASE_PATH, "src")
export const SERVER_PATH = "./server"
export const PUBLIC_PATH = path.join(BASE_PATH, "public")
export const COMPONENTS_PATH =  path.join(SRC_PATH, "components")
export const TEMPLATES_PATH = {
  INDEX: path.join(SRC_PATH, "templates", "index.tmpl.html")
}

export const BABEL_LOADER = {
  test: /\.jsx?$/,
  include: [
    SRC_PATH
  ],
  // exclude: /node_modules/,
  loader: "babel"
}

export const JSON_LOADER = {
  test: /\.json$/,
  loader: "json"
}

export const ISO_STYLE_LOADER = {
  test: /\.css$/,
  loaders: [
    "isomorphic-style-loader",
    "css"
  ]
}

export const STYLE_LOADER = {
  test: /\.css$/,
  loader: "style!css?modules!postcss"
}
