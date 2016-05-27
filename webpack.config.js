module.exports = {
    entry: './src/app.js',
    output: {
        filename: './build/app.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /nose_modules/,
                query: {
                    plugins: ['transform-decorators-legacy' ],
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ]
    }
};