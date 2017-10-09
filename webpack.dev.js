const path = require('path')

module.exports = Object.assign(require('./webpack.config.js'), {
	entry: {
		app: ['./demo/index.jsx']
	},
	devServer: {
		contentBase: './demo/',
	},
	devtool: "eval-source-map",
})
