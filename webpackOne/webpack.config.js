var path = require('path');
module.exports = {
    entry: {
        // On production
        // app: ['./es6/main.js']
        // On development
        app: ['webpack/hot/dev-server', './es6/main.js']
    },
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: "style!css"
            }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    }
};