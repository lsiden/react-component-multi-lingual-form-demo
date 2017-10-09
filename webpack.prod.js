const path = require('path')

module.exports = Object.assign(require('./webpack.config.js'), {
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'dist'
	},
	plugins: [
	]
})
