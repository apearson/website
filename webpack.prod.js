/* Libraries */
const webpack = require('webpack');
const merge = require('webpack-merge');

/* Base Config */
const config = require('./webpack.config.js');

/* Plugins */
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

/* Extending config for prod */
module.exports = merge(config, {
	/* Changing mode to production */
	mode: 'production',

	/* Source Maps */
	devtool: 'source-map',

	/* Plugins */
	plugins: [
		new UglifyJsPlugin({sourceMap: true})
	],
});