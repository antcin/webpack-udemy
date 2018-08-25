const path = require("path"); //handle by node.js

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"), //reference to directory the output file should be saved to. Gotcha: we must specify absolute filepath. Use node.s path module to generate path. We use path.resolve() to make sure that webpack.config can be safely executed on any OS. "build" is the folder where bundle.js is saved
    filename: "bundle.js" // what webpack should call the actual file that gets created
  }
};

module.exports = config;
