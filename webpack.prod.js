const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = Object.assign(require('./webpack.config.js'), {
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'dist'
	},
	plugins: [
		new UglifyJSPlugin({
			test: /\.js[x]?$/,
		})
	]
})
