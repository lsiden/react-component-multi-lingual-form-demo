const path = require('path')

module.exports = Object.assign(require('./webpack.config.js'), {
	entry: {
		app: ['./demo/index.jsx']
	},
	devServer: {
		contentBase: './demo/',
		inline: true,
	},
	output: {
		filename: 'bundle.demo.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'dist'
	},
})
