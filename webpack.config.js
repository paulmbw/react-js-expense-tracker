const path = require('path')
const publicPath = path.resolve(__dirname, 'public');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if(process.env.NODE_ENV === 'test') {
	
} else if (process.env.NODE_ENV === 'development') {
	
}
module.exports = env => {
	const isProd = env === 'production';
	const CSSExtract = new ExtractTextPlugin('styles.css');
	return {
		entry: './App.js',
		mode: 'development',
		output: {
			path: publicPath,
			filename: 'bundle.js'
		},
		module: {
			rules: [
				{
					loader: 'babel-loader',
					test: /\.js$/,
					exclude: /node_modules/
				},
				{
					test: /\.s?css$/,
					use: CSSExtract.extract({
						use:[
							{
								loader: 'css-loader',
								options: {
									sourceMap: true
								}
							},
							{
								loader: 'sass-loader',
								options: {
									sourceMap: true
								}
							}
						]
					})
				}
			]
		},
		plugins: [
			CSSExtract
		],
		devtool: isProd ? 'source-map' : 'inline-source-map',
		devServer: {
			contentBase: publicPath,
			port: 9000,
			historyApiFallback: true
		}
	}
}	