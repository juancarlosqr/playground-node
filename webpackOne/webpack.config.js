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
            { test: path.join(__dirname, 'es6'),
              loader: 'babel-loader' }
        ]
    }
};