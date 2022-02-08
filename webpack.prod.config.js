const config = require('./webpack.config');

config.mode = 'production';
config.devServer = {};
config.devtool = false;
config.output.publicPath = '/inshop/Layout/Pages/dist/';
config.output.filename = 'app/[name].[chunkhash:5].js';
module.exports = config;