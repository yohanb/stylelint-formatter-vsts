var path = require("path");

module.exports = {
    context: path.join(__dirname, "src"),
    entry: {
        "stylelint-formatter-vsts": "./formatter.js"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        chunkFileName: "[name]_[chunkhash:20].js",
        publicPath: "./"
    },
    module: {
        preLoaders: [
            { test: /(.*src.*\.js$)/, loaders: ["eslint"] }
        ]
    }
};