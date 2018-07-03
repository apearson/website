/* Libraries */
const path = require('path');
const merge = require('webpack-merge');

/* Plugins */
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

/* Webpack configs */
const baseConfig = {
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
const devConfig = {
	/* Changing mode to production */
	mode: 'development',

	/* Source Maps */
	devtool: 'cheap-source-map',

	/* Development */
	devServer: {
		contentBase: path.resolve('public'),
		watchContentBase: true,
		host: '0.0.0.0',
	},
}
const prodConfig = {
	/* Changing mode to production */
	mode: 'production',

	/* Source Maps */
	devtool: 'source-map',

	/* Turning off warnings */
	performance: { hints: false },

	/* Plugins */
	plugins: [
		new UglifyJsPlugin({sourceMap: true})
	],
}

/* Determine which is needed */
module.exports = env => env === 'production'? merge(baseConfig, prodConfig) : merge(baseConfig, devConfig);
