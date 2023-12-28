const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const config = {
  entry: './src/assets/js/app.js',
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: '[name][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|webp|svg|ico)$/,
        type: 'asset/resource',
        generator: {
          filename: 'src/assets/img/[name][ext]',
        },
        exclude: path.resolve(__dirname, 'src/assets/fonts'),
      },
      {
        test: /\.(mp4|webm)$/,
        type: 'asset/resource',
        generator: {
          outputPath: 'src/assets/video',
        },
      },
      {
        test: [
          /\.(woff|woff2|eot|ttf)$/,
          path.resolve(__dirname, 'src/assets/fonts/custom/icons.svg'),
        ],
        type: 'asset/resource',
        generator: {
          filename: 'src/assets/fonts/[name][ext]',
        },
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        options: {
          runtime: path.resolve(
            __dirname,
            'src/assets/js/helpers/handlebars-layouts'
          ),
          precompileOptions: {
            knownHelpersOnly: false,
          },
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ].concat(
    ['index'].map(
      (page) => {
        return new HtmlWebpackPlugin({
          inject: 'body',
          title: 'Prueba Tecalis',
          filename: `${page}.html`,
          template: `src/templates/${page}.hbs`,
          templateParameters: require(`./src/data/${page}.json`),
          hash: true,
          minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
          },
        });
      }
    )
  ),
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true,
    port: 9000,
  },
  resolve: {
    alias: {
      handlebars: 'handlebars/dist/handlebars.min.js',
    },
  },
  stats: {
    children: true,
  },
};

module.exports = config;
