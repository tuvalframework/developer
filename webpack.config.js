const copyright = `
/*! *****************************************************************************************************************************
* Copyright (c) Tuvalsoft Corporation. All rights reserved.                                                                     *
*                                                                                                                               *
* ████████╗██╗   ██╗██╗   ██╗ █████╗ ██╗         ███████╗██████╗  █████╗ ███╗   ███╗███████╗██╗    ██╗ ██████╗ ██████╗ ██╗  ██╗ *
* ╚══██╔══╝██║   ██║██║   ██║██╔══██╗██║         ██╔════╝██╔══██╗██╔══██╗████╗ ████║██╔════╝██║    ██║██╔═══██╗██╔══██╗██║ ██╔╝ *
*    ██║   ██║   ██║██║   ██║███████║██║         █████╗  ██████╔╝███████║██╔████╔██║█████╗  ██║ █╗ ██║██║   ██║██████╔╝█████╔╝  *
*    ██║   ██║   ██║╚██╗ ██╔╝██╔══██║██║         ██╔══╝  ██╔══██╗██╔══██║██║╚██╔╝██║██╔══╝  ██║███╗██║██║   ██║██╔══██╗██╔═██╗  *
*    ██║   ╚██████╔╝ ╚████╔╝ ██║  ██║███████╗    ██║     ██║  ██║██║  ██║██║ ╚═╝ ██║███████╗╚███╔███╔╝╚██████╔╝██║  ██║██║  ██╗ *
*    ╚═╝    ╚═════╝   ╚═══╝  ╚═╝  ╚═╝╚══════╝    ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝ ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ *
*                                                                                                                               *
*                                                                                                                               *
* This file is part of Tuval Framework.                                                                                         *
* Copyright (c) Tuvalsoft 2019 All rights reserved.                                                                             *
*                                                                                                                               *
* Licensed under the GNU General Public License v3.0.                                                                           *
* More info at: https://choosealicense.com/licenses/gpl-3.0/                                                                    *
* Tuval Framework Created By Tuvalsoft in 2019                                                                                  *
******************************************************************************************************************************@*/
`;
const path = require('path');
//const DeclarationBundlerPlugin = require('./declaration-bundler-webpack-plugin.fix');
//const CopyWebpackPlugin = require('copy-webpack-plugin');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//const TypedocWebpackPlugin = require('typedoc-webpack-plugin');
//const DtsBundleWebpack = require('dts-bundle-webpack');
const fs = require('fs');

const manifest = require('./src/manifest');

const umdConfig = {
    mode: 'development',
    devtool: 'source-map',
    //devtool: 'none',
    entry: './src/Application.ts',
     externals: {
        '@tuval/core': 'tuval$core',
        '@tuval/cg': 'tuval$core$graphics',
        '@tuval/graphics': 'tuval$graphics',
        '@tuval/gui': 'tuval$gui',
        '@tuval/forms': 'tuval$forms',
        '@realmocean/codeeditor': 'realmocean$codeeditor',
        '@realmocean/buttons': 'realmocean$buttons',
        '@realmocean/calendars': 'realmocean$calendars',
        '@tuval/components-charts': 'realmocean$charts',
        '@realmocean/compression': 'realmocean$compression',
        '@realmocean/core': 'realmocean$core',
        '@realmocean/data': 'realmocean$data',
        '@realmocean/diagram': 'realmocean$diagram',
        '@realmocean/dropdowns': 'realmocean$dropdowns',
        '@realmocean/excelexport': 'realmocean$excelexport',
        '@realmocean/filemanager': 'realmocean$filemanager',
        '@realmocean/fileutils': 'realmocean$fileutils',
        '@realmocean/grids': 'realmocean$grids',
        '@realmocean/inputs': 'realmocean$inputs',
        '@realmocean/layouts': 'realmocean$layouts',
        '@realmocean/lists': 'realmocean$lists',
        '@realmocean/navigations': 'realmocean$navigations',
        '@realmocean/pdfexport': 'realmocean$pdfexport',
        '@realmocean/popups': 'realmocean$popups',
        '@realmocean/splitbuttons': 'realmocean$splitbuttons',
        '@realmocean/svgbase': 'realmocean$svgbase',
        '@realmocean/query-builder': 'realmocean$query-builder',
        '@realmocean/spreadsheet': 'realmocean$spreadsheet'
    },
    module: {
        rules: [
            /*   {
                test: /\.js$/,
                use: ['babel-loader', 'webpack-conditional-loader']
              }, */
            {
                test: /\.(wasm|eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                type: 'javascript/auto',
                loader: 'arraybuffer-loader',
            },
            {
                test: /\.tsx?$/,
                //use: 'ts-loader',
                use: [
                    { loader: "ts-loader" },
                    //  { loader: "ifdef-loader", options: opts }
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['to-string-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            },
            {
                test: /\.md$/i,
                use: 'raw-loader',
            },
            /*  {
               test: /\.(woff|woff2|eot|ttf|otf)$/,
               use: [
                 'file-loader'
               ]
             } */
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            child_process: false,
            fs: false,
            crypto: false,
            net: false,
            tls: false,
            ws: false,
            os: false,
            path: false
        }
    },
    output: {
        libraryTarget: 'umd',
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [{
            apply: (compiler) => {
                compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
                    const file = './dist/index.js';
                    var data = fs.readFileSync(file); //read existing contents into data
                    //var fd = fs.openSync(file, 'w+');
                    var buffer = new Buffer(copyright);
                    fs.writeFileSync(file, buffer);
                    fs.appendFileSync(file, data);

                    var bufferEnd = new Buffer(`

                tuval$core.ModuleLoader.FireModuleLoadedEvent('${manifest.application.name}', tuval$core['__APPS__']['${manifest.application.name}']);
                `);
                    fs.appendFileSync(file, bufferEnd);
                    /*  fs.appendFile('./dist/index.js', `
        tuval$core.ModuleLoader.FireModuleLoadedEvent('${manifest.application.name}', tuval$core['__APPS__']['${manifest.application.name}']);
`, (err) => {
        if (err) throw err;
        console.log('The lyrics were updated!');
    }); */
                });
            }
        }

    ]
};

module.exports = [umdConfig /* webClientConfig */ /* umdConfig */ /* , umdWebProcess */ ];
