const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            reload: true,
            server: {
                baseDir: ['./']
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss?$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: 'style-loader!css-loader!sass-loader',

            },
            {
                test: /\.html?$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                },
            }
        ]
    }
}