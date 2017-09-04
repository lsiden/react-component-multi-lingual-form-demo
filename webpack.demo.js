module.exports = Object.assign(require('./webpack.config.js'), {
	entry: {
		app: ['./demo/index.jsx']
	},
	devServer: {
		contentBase: './demo/',
		inline: true,
	},
})
