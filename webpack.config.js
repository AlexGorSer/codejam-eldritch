// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const CopyPlugin = require("copy-webpack-plugin");
const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';



const config = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: "assets/source/[name][ext]",
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // favicon: './src/assets/favicon.ico',
        }),
        new CopyPlugin({
            patterns: [
                // { from: './src/assets/sounds/*.mp3', to:'./assets/sounds/[name][ext]'},
                // { from: './src/js/*.json', to:'./js/[name][ext]'},
                { from: './src/assets/Ancients/*.png', to:'./assets/Ancients/[name][ext]'},
                { from: './src/assets/MythicCards/brown/*.png', to:'./assets/MythicCards/brown/[name][ext]'},
                { from: './src/assets/MythicCards/green/*.png', to:'./assets/MythicCards/green/[name][ext]'},
                { from: './src/assets/MythicCards/blue/*.png', to:'./assets/MythicCards/blue/[name][ext]'},
            ]  
        })
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [ 
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/i,
                type: 'asset',
                generator: {
                    filename: 'assets/fonts/[name][ext]'
                }
            },
            {
                test: /\.(svg|png|jpg|gif)$/i,
                type: 'asset',
                generator: {
                    filename: 'assets/img/[name][ext]'
                }
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        config.plugins.push(new MiniCssExtractPlugin());
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};

// new CopyPlugin({
//     patterns: [
//         {
//             from: path.resolve(__dirname, 'src/assets/sounds'),
//             to: path.resolve(__dirname, 'build')
//         }
//     ]
// })