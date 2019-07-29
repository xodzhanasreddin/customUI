import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';

import {dir} from './globals';

const lintPreLoader = {
  test: /\.tsx?$/,
  enforce: 'pre',
  use: [{
    loader: 'tslint-loader',
    options: {
      configFile: `${dir.config}/tslint.json`,
      emitErrors: true,
      failOnHint: true
    }
  }]
};

const tsxLoader = {
  test: /\.tsx?$/,
  use: [
    {
      loader: 'awesome-typescript-loader',
      options: {
        configFileName: `${dir.config}/typescript/tsconfig.webpack.json`
      }
    }
  ],
  exclude: '/node_modules/'
};

const styleLoader = {
  test: /\.s?css$/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        minimize: true,
        importLoaders: 2
      }
    },
    'sass-loader'
  ]
};

const assetsLoader = [
  {
    test: /\.svg$/,
    use: [{
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'assets/svg/'
      }
    }]
  }
];

const rules = [
  lintPreLoader,
  tsxLoader,
  styleLoader,
  ...assetsLoader
];

export {rules};
