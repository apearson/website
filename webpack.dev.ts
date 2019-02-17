/* Libraries */
import * as webpack from 'webpack';
import * as merge from 'webpack-merge';
import * as webpackDevServer from 'webpack-dev-server';

/* Including both configurations */
interface Config extends webpack.Configuration{
	devServer: webpackDevServer.Configuration;
}

/* Base Config */
import baseConfig from './webpack.config';

/* Dev Config */
const devConfig: Config = {
	/* Primary mode */
	mode: 'development',

	/* Source Maps */
	devtool: 'source-map',

	/* Dev Server */
	devServer:{
		port: 8080,
		historyApiFallback: true,
		contentBase: ['./public/'],
		watchContentBase: true,
		useLocalIp: true,
		overlay: true,
		host: '0.0.0.0',
	},

	/* Plugins */
	plugins:[],
};

/* Exporting merged config */
export default merge(baseConfig, devConfig);