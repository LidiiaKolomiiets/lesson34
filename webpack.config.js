const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][fullhash].js',
        clean: true,
        publicPath: './'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name][fullhash].css'
        }),
    ],
    devServer: {
        port: 5551,
        static: {
            directory: path.join(__dirname, 'dist')
        },
        historyApiFallback: true,
        watchFiles: 'src/**/*',
        devMiddleware: {
            writeToDisk: true
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:
                            ['@babel/preset-env',
                                '@babel/preset-react'
                            ]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePaths: ['node_modules'],
                            },
                        },
                    },
                ]
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: 'images/[name].[ext]',
                    },
                  },
                ],
              },
        ]
    }
};