const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
    entry: {
       index: './src/index.js',
       print: './src/print.js',
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: "./dist",
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development'
        })
    ],
    optimization: {
        runtimeChunk: 'single',
    }
}