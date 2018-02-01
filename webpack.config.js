var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    watch: true,
    target: 'electron',
    entry: './app/src/Main.js',
    output: {
        path: __dirname + '/build',
        publicPath: 'build/',
        filename: 'bundle.js'
    },
    externals: {
        knex: 'commonjs knex',
        sqlite3:"require('sqlite3')",
        oracledb:"require('oracledb')"
    },
    module: {
        loaders: [
            {
                test:  /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: "css-loader"
				})
			},
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',    // where the fonts will go
                        publicPath: './'       // override the default path
                    }
                }]
            },
        ]
    },
    plugins: [
		new ExtractTextPlugin({
			filename: "bundle.css",
			allChunks: true
		})
	]
}