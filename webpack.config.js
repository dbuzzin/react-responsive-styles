const HTMLWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HTMLWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
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
