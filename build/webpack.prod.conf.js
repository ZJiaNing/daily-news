const webpack = require("webpack");
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 导入基本配置
const baseConfig = require('./webpack.base.conf.js');

var prodConfig = merge(baseConfig, {
    mode: "production", // 写入，则就会压缩js代码了
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, "../src/index.html"),
            inject: true
        })
    ],
    devServer: {
        port: 3000,
        open: true
    }
});

module.exports = prodConfig;