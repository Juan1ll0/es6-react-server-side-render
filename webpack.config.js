module.exports = {
    devtool: 'source-map',
    entry: './src/browser.jsx',
    output: {
        path: './public',
        filename: './js/app.js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        contentBase: './public',
    },
    module: {
        loaders: [
            {
                test: /[\.js$|\.jsx$]/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                query: {
                    cacheDirectory: false,
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            }
        ]
    },
    cache: false,
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
