const {merge} = require("webpack-merge");
const common = require("./webpack.config");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const path = require("path");

module.exports = merge(common, {
    mode: "production",

    output: {
        filename: "[name]-[contenthash].js",
        path: path.join(__dirname, "/dist"),
        assetModuleFilename: "public/[hash][ext][query]",
        clean: true,
    },

    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin({
                test: /\.css$/i,
                parallel: true,
            }), new TerserPlugin({
                test: /\.js$/i,
                exclude: /node_modules/,
                parallel: true,
            }),
        ],
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader", {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: ["postcss-preset-env", "tailwindcss"],
                            },
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name]-[contenthash].css",
        }), new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true,
            },
        }),
    ],
});