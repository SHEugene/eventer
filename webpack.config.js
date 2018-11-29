const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './app/public-src/index.jsx',
	mode: 'development',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './public')
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['react']
				}
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	}
};
