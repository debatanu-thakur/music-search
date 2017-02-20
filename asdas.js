const config = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './app/bootstrap.js', //entry file
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
    devtool: 'cheap-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, './src'),
        port: 8700,
        inline: true,
        hot: true,
        watchContentBase: true,
        open: true,
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            disable: false,
            allChunks: true,
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
        }),
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
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
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
