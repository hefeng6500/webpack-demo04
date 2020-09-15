const path = require("path");
const root = path.join(__dirname, "./");

const config = {
  mode: "development",
  entry: path.join(root, "src/app.js"),
  output: {
    path: path.join(root, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.styl(us)?$/,
        use: [
          path.join(root, "loaders", "style-loader.js"),
          path.join(root, "loaders", "stylus-loader.js"),
        ],
      },
    ],
  },
};

module.exports = config;
