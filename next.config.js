const withSass = require("@zeit/next-sass");

module.exports = withSass({
  // Options to pass to css-loader
  // https://github.com/webpack-contrib/css-loader#options
  // cssModules: true,
  // cssLoaderOptions: {
  //   importLoaders: 1,
  //   localIdentName: "[local]___[hash:base64:5]"
  // }
  // Options to pass to node-sass pre-processor
  // https://github.com/sass/node-sass#options
  // sassLoaderOptions: {
  //   includePaths: ['./src']
  // }
});
