const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: ['./app/public-src/javascript-webpack/index.jsx', './app/public-src/scss/main.scss'],
	mode: 'development',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './public'),
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['react'],
				},
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	plugins: [
		new ExtractTextPlugin('main.css'),
	],
	node: {
		fs: 'empty'
	}
};
