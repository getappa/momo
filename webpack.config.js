const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./webapp/index.html",
  filename: "./index.html"
});

module.exports = {
    entry: "./webapp/App.js",
    output: {
        path: path.resolve('api/static'),
        filename: 'bundled.js'
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'webapp'),
            'node_modules'
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {
        hot: true,
        inline: true,
        port: 8080,
        historyApiFallback: true,
    },
    plugins: [htmlPlugin]
};