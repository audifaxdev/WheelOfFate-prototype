'use strict';
let path = require('path');
let webpack = require('webpack');

module.exports = {
  entry: {
    'app': ['./app/app.ts'],
    'vendor': ['three', 'lodash']
  },

  output: {
    path: './dist',
    filename: '[name].es5.bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader?configFileName=tsconfig.json'
      }
    ]
  },

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'app')
    ],
    extensions: ['.ts', '.js'],

  },

  plugins: [

  ],

  devtool: false
};
