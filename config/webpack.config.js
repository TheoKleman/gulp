// Require config
var config = require('./general.config.js')

let path = require('path')

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: {
		app: config.scripts.inputPath + '/' + config.scripts.entry,
	},
	output: {
		filename: config.scripts.outputName + '.js',
	},
	module: {
		loaders: [
			{
				test: /\.es6?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
			}
		]
	},
	resolve: {
		extensions: ['', '.es6'],
		root: [
			path.resolve(config.scripts.inputPath)
		]
	},
}
