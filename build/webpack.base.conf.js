const webpack = require("webpack");
// 为node的一个模块
const path = require('path');
// 什么时候需要加这个，为什么以前没有增加过呢？？ 为什么要增加这个来着？
// https://github.com/vuejs/vue-loader/issues/1238
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const projectRoot = path.resolve(__dirname, '../');

module.exports = {
    entry: path.resolve(__dirname, "../src/main.js"), // OR entry: './src/main.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../dist")
    },
    resolve: {
        extensions: [' ', '.css', '.less', '.js', '.vue', '.json'],
        alias: {
            // 'vue$': 'vue/dist/vue.esm.js'
            'vue$': 'vue/dist/vue',
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components')
        }
    },
    module: {
        rules: [{
            test: /\.css$/,
            loader: ["style-loader", "css-loader"]
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            include: projectRoot,
            exclude: /node_modules/
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, // element-ui的图标组件是需要这个loader的
            loader: 'url-loader',
        }]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}