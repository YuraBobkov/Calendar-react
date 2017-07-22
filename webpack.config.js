var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: ['./components/Calendar.js']
    },
    output: { path: __dirname, filename: 'bundle.js' },
    module: {
        loaders: [
        {
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
            presets: ['react', 'stage-0']
            }
        }
    ]
    },
    devtool: 'source-map'
};
