/* Libraries */
const merge = require('webpack-merge');
const config = require('./webpack.config.js');

/* Plugins */
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

/* Extending config for prod */
module.exports = merge(config, {

	/* Source Maps */
	devtool: 'source-map',

	/* Plugins */
	plugins: [new UglifyJsPlugin({sourceMap: true})],
});