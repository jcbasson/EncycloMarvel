var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var path = require('path');

var compiler = webpack(webpackConfig);
var server = new WebpackDevServer(compiler, {
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
    // respond to 404s with index.html
    contentBase: path.join(__dirname, 'client/initEncycloMarvel.js'),
    hot: true,
    filename: '[name].[hash].js',
    stats: {
        colors: true,
    },
    inline: true
});
server.listen(8080, 'localhost', function () {
});
