require('webpack');
var glob = require('glob');

module.exports = {
    context: __dirname,
    entry: {
        app: glob.sync(__dirname + '/client/**/*.js')
    },
    output: {
        path: __dirname + '/public/js',
        filename: '[name].bundle.js' // This will be called app.bundle.js
    },
    module: {
        loaders: [ // ES2015 Transpiler for outputting old JS in lew of programming with new JS for browsers.
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};
