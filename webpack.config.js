module.exports={
  entry:{
    "app.js": "./js",
  },
  output: {
    path: "./dist",
    publicPath: '/2048/dist/',
    filename: "[name]"
  },
  module: {
    loaders: [
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        loader: 'file'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
}
