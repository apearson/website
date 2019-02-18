/* Libraries */
import * as path from 'path';

/* Webpack configs */
const baseConfig = {
	/* Entry */
	// entry: './src/main.ts',

	entry: {
		'public/dist/bundle': path.resolve(__dirname, 'src', 'main.ts'),
		'dist/utility-data': path.resolve(__dirname, 'src', 'functions', 'utility-data.ts')
	},

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
	// output: {
	// 	filename: 'bundle.js',
	// 	path: path.resolve('public', 'dist'),
	// 	publicPath: '/dist/'
	// }
	output: {
		path: path.resolve('.'),
		filename: '[name].js',
		publicPath: '/dist/',
	},
};

/* Webpack config export */
export default baseConfig;