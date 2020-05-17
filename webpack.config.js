const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const htmlPlugin = new HTMLWebpackPlugin({
    template: "./src/index.html",
    filename: "./demo01.html"
});

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.resolve(__dirname, "demos"),
        filename: "demo01.bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node-modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css?/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [htmlPlugin]
};
