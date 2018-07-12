const webpack = require('webpack');
const path = require('path');

// The src directory files are built into the build directory
const SRC_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'build');

module.exports = {
  entry: SRC_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};

	// module: {
	// 	rules: [
 //      {
 //        test: /\.(js|jsx)$/,
 //        exclude: /node_modules/,
 //        use: {
 //          loader: 'babel-loader'
 //        }
 //      }
 //    ]
	// }
//};