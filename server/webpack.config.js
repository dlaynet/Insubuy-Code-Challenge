var webpack = require('webpack'),
    path = require('path');

module.exports = {
 entry: [
   'routes/index.js',
   'public/stylesheets/style.css'
 ],
 output: {
   path: __dirname,
   publicPath: '/',
   filename: 'bundle.js'
 },
 module: {
   rules: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       use: {
         loader: "script-loader"
       }
     },
     {
       test: /\.css$/,
       use: [
         {
           loader: "style-loader"
         },
         {
           loader: "css-loader",
           options: {
             modules: true,
             importLoaders: 1,
             localIdentName: "[name]_[local]_[hash:base64]",
             sourceMap: true,
             minimize: true
           }
         }
       ]
     }
   ]
 }
};
