module.exports = {
	allowNotifications: true,
	scripts: {
		entry: 'main.es6',
		inputPath: './src/scripts',
		outputPath: './build/js',
		outputName: 'main'
	},
	styles: {
		entry: 'main.scss',
		inputPath: './src/styles',
		outputPath: './build/css'
	},
	browserSync: {
		proxy: "project.dev",
		open: false,
		notify: false,
		https: false,
		ui: false,
		ghostMode: false
	}
}
