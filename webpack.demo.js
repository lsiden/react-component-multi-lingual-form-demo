const path = require('path')

module.exports = Object.assign(require('./webpack.config.js'), {
	entry: {
		app: ['./demo/index.jsx']
	},
	devServer: {
		contentBase: './demo/',
	},
	output: {
		filename: 'bundle.demo.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'dist'
	},
	devtool: "eval-source-map",
})
