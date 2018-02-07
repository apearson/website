/* Libraries */
const path = require('path');

/* Webpack config */
module.exports = {
	entry: './src/main.ts',

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},

	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ]
	},

	output: {
		filename: 'bundle.js',
		path: path.resolve('public', 'dist'),
		publicPath: '/dist/'
	},

	/* Development */
	devServer: {
		contentBase: path.resolve('public'),
		watchContentBase: true,
		host: '0.0.0.0',
		open: true,
	},
};