/* Libraries */
const path = require('path');

/* Webpack config */
module.exports = {
	/* Entry */
	entry: './src/main.ts',

	/* File resolution */
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ]
	},

	/* Loaders */
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},

	/* Output */
	output: {
		filename: 'bundle.js',
		path: path.resolve('public', 'dist'),
		publicPath: '/dist/'
	}
};