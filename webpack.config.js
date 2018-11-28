const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './app/public-src/index.jsx',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist')
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['react-hmre']
				}
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	}
};
