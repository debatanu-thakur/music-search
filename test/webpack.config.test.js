const path = require('path');
const HappyPack = require('happypack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const happyThreadCount = 4;

const config = {
    devtool: 'cheap-module-source-map',
    plugins: [
        new HappyPack({
            id: 'eslint',
            loaders: [{
                loader: 'eslint-loader',
            }],
            threads: happyThreadCount,
        }),
        new HappyPack({
            id: 'babel',
            loaders: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015'],
                },
            }],
            threads: happyThreadCount,
        }),
    ],
    module: {
        rules: [{
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                enforce: 'pre',
                test: [/\.js$/],
                exclude: [/node_modules/, /\.spec.js$/],
                use: [{
                    loader: 'istanbul-instrumenter-loader',
                    options: {
                        esModules: true,
                    },
                }],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: /\.spec\.js/,
                enforce: 'pre',
                use: [{
                    loader: 'happypack/loader?id=eslint',
                }],
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: [{
                    loader: 'happypack/loader?id=babel',
                }],
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader: 'css-loader',
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                modules: true,
                            },
                        },
                    ],
                }),
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    query: {
                        limit: 2000,
                        name: '[name].[ext]',
                    },
                }],
            },
        ],
    },
};

module.exports = config;
