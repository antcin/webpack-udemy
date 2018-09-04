const path = require("path"); //handle by node.js
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"), //reference to directory the output file should be saved to. Gotcha: we must specify absolute filepath. Use node.s path module to generate path. We use path.resolve() to make sure that webpack.config can be safely executed on any OS. "build" is the folder where bundle.js is saved
    filename: "bundle.js" // what webpack should call the actual file that gets created
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/
      },
      {
        use: ExtractTextPlugin.extract({
          use: "css-loader"
        }),
        test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg?)$/,
        use: [
          {
            use: "url-loader",
            options: { limit: 40000 } // look for any images that are lesser than 40 kB
          },
          "image-webpack-loader"
        ] // order matters, far right loader is first to be exectued
      }
    ]
  },
  plugins: [new ExtractTextPlugin("style.css")]
};

module.exports = config;
