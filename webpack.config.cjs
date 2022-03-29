const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

/** @return {import('webpack').Configuration} */
module.exports = (env) => {
  const isBuild = Boolean(env.WEBPACK_BUILD);

  return {
    mode: isBuild ? 'production' : 'development',
    target: 'web',
    entry: './src/index.tsx',
    output: {
      path: `${__dirname}/docs`,
      filename: 'bundle/[name].[chunkhash:8].js',
      assetModuleFilename: 'bundle/[name].[contenthash:8].[ext]',
      publicPath: '/',
    },
    stats: { all: false, chunks: true, errors: true, warnings: true },
    performance: { hints: false },
    devtool: isBuild ? 'source-map' : 'inline-source-map',
    resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.wasm'] },
    module: {
      rules: [
        {
          test: /\.(tsx?|jsx?)$/i,
          exclude: [/node_modules[\\/]webpack[\\/]buildin/, /node_modules[\\/]core-js/],
          use: 'babel-loader',
        },
        {
          test: /\.tsx?$/i,
          exclude: [/node_modules/],
          use: {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
              compilerOptions: {
                noEmit: false,
              },
            },
          },
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(gif|jpe?g|png|apng|svg|webp|bmp|ico|woff2?|otf|ttf)$/,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlPlugin({ template: './public/index.html', minify: false }),
      new CopyPlugin({
        patterns: [{ context: './public', from: '**', globOptions: { ignore: ['**/public/index.html'] } }],
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: isBuild ? 'static' : 'disabled',
        openAnalyzer: false,
        reportFilename: `${__dirname}/out/report.html`,
      }),
    ],
    devServer: {
      allowedHosts: 'all',
      client: { overlay: { errors: true, warnings: false } },
      compress: true,
      historyApiFallback: true,
      host: '0.0.0.0',
      hot: false,
      port: 8080,
      static: 'public',
    },
  };
};
