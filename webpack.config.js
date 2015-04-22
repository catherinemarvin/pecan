var bower_dir = __dirname + "/bower_components"
var config = {
  addVendor: function (name, path) {
    this.resolve.alias[name] = path;
  },

  entry: [ './app/main.js' ],
  resolve: {
    alias: {}
  },
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader' }
    ]
  }
};

config.addVendor("react", bower_dir + "/react/react.min.js");

module.exports = config;
