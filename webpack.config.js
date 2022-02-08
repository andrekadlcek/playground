const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Handlebars = require('handlebars');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
    entry: {
        index: './src/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].bundle.js',
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            loaders.CSSLoader,
            loaders.IMGLoader,
            loaders.HTMLLoader
        ]
    },
    plugins: [
        plugins.MiniCssExtractPlugin,
        new HtmlWebpackPlugin({ template: './src/index.html'})
    ],
    devServer: {
        contentBase: './dist',
        host: '0.0.0.0',
        port: 8000,
        open: true,
        inline: false
    },
    resolve: {
        extensions: ['.js', '.jsx', ".ts", ".tsx", '.scss', '.gif', '.png', '.jpg', '.jpeg', '.svg']
    }
};