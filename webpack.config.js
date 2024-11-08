const path = require("path");

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, "src/index.tsx"),
    },

    target: "web",

    module: {
        rules: [
            {
                test: /\.(tsx|ts|jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env", ["@babel/preset-react", {"runtime": "automatic"}], "@babel/preset-typescript",
                        ],
                    },
                },
            }, {
                test: /\.(jpg|jpeg|png|svg|gif|ico)$/i,
                type: "asset/resource",
            }, {
                test: /\.html$/,
                use: ["html-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"],
    },
};