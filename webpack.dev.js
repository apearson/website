/* Libraries */
const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.config.js');

/* Extending config for dev */
module.exports = merge(config, {

	/* Source Maps */
	devtool: 'cheap-source-map',

	/* Development */
	devServer: {
		contentBase: path.resolve('public'),
		watchContentBase: true,
		host: '0.0.0.0',
		open: true,
	},
});