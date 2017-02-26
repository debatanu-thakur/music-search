require('babel-polyfill');

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const HappyPack = require('happypack');

const happyThreadCount = 4;

const config = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './bootstrap.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    resolve: {
        modules: [
            'node_modules',
        ],
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, './src'),
        port: 8700,
        inline: true,
        hot: true,
        watchContentBase: true,
        open: true,
    },
    plugins: [
        new DashboardPlugin(),
        new ExtractTextPlugin({
            filename: '[name].css',
            disable: false,
            allChunks: true,
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(mod, count) {
                // Don't include things under '/src' folder
				return mod.resource &&
                        mod.resource
                        .indexOf(path.resolve(__dirname, 'src')) === -1;
            },
        }),
        new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery',
            'window.jQuery': 'jquery',
		}),
        new HappyPack({
            id: 'eslint',
            loaders: [
                {loader: 'eslint-loader'},
                ],
            threads: happyThreadCount,
        }),
        new HappyPack({
            id: 'babel',
            loaders: [
                {loader: 'babel-loader', options: {presets: ['es2015']},
            },
                ],
            threads: happyThreadCount,
        }),
        new CopyWebpackPlugin([
            {from: 'assets', to: 'assets'},
        ]),
    ],
    module: {
        rules: [
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: [{loader: 'happypack/loader?id=eslint'}],
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: [{loader: 'happypack/loader?id=babel'}],
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract( {
                    fallback: 'style-loader',
                    loader:
                    [{loader: 'css-loader'},
                    {loader: 'sass-loader', options: {modules: true}}],
                }),
            },
            {
				test: /\.(jpg|png|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						query: {
							limit: 2000,
							name: '[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.(ico|woff|eot|woff2|ttf)$/,
				use: [
					{
						loader: 'url-loader',
						query: {
							limit: 1,
							name: '[name].[ext]',
						},
					},
				],
			},
        ],
    },
};

module.exports = config;
