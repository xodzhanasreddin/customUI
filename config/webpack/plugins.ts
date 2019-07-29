import CleanWebpackPlugin from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {ProvidePlugin} from 'webpack';

import {dir} from './globals';

const plugins = [
  new CleanWebpackPlugin(dir.core, {
    root: dir.root
  }),
  new MiniCssExtractPlugin({
    filename: `ui.css`
  }),
  new ProvidePlugin({
    '$': 'jquery',
    'jQuery': 'jquery',
    'window.jQuery': 'jquery'
  })
];

export {plugins};
