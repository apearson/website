/* Libraries */
import * as webpack from 'webpack';
import * as merge from 'webpack-merge';
import * as UglifyJsPlugin from 'uglifyjs-webpack-plugin';

/* Base Config */
import baseConfig from './webpack.config';

/* Prod Config */
const devConfig: webpack.Configuration = {
	/* Primary mode */
	mode: 'production',

	/* Plugins */
	plugins:[
		new UglifyJsPlugin({sourceMap: true})
	],
};

/* Exporting merged config */
export default merge(baseConfig, devConfig);
