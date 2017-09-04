const path = require('path')

const config = {
	entry: {
		app: ['./src/index.jsx']
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'dist'
	},
	resolve: {
		extensions: ['.js', '.jsx', 'json']
	},
	module: {
		loaders: [
			{
				test: /\.js[x]?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader',
			}
		]
	},
	plugins: [
	],
};

module.exports = config