import {dir} from './globals';
import {rules} from './rules';
import {plugins} from './plugins';

const config = {
  mode: 'production',
  entry: {
    'dist/bundle': [dir.src, `${dir.src}/index.scss`]
    // 'vendors': [dir.vendors]
  },
  output: {
    path: dir.core,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss']
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules
  },
  plugins
};

export default config;
