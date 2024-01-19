const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (argv) => {

    return {
        mode: argv.mode,
        entry: {
            main: path.resolve(__dirname, './src/index.js')
        },
        output: {
            path: path.resolve(__dirname, './build'),
            filename: "bundle.js"
        },
        module:{
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$|jsx/,
                },
                {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                }
                ]
        },
        resolve: {
            alias: {
                components: path.resolve(__dirname, 'src/components'),
            },
             extensions: ['.jsx', '.js'],
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'webpack Boilerplate',
                template: path.resolve(__dirname, './public/index.html'),
                filename: 'index.html',
            }),
        ],
        devServer: {
                port: 3000
        }
    }
}