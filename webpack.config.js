const path =  require('path');
const { VueLoaderPlugin } =  require('vue-loader');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const MiniCssExtractPlugin =  require('mini-css-extract-plugin');
const { CleanWebpackPlugin } =  require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
  },
  resolve: {
      extensions: ['.js', '.vue']
  },
  devtool: 'source-map',
  module: {
      rules: [
          {
              test: /\.vue$/,
              loader: 'vue-loader'
          },
          {
              test: /\.(html)?$/,
              loader: 'html-loader'
          },
          {
              test: /\.(s*css)$/,
              use: ['style-loader', 'css-loader', 'sass-loader']
          },
          {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource'
          },
          {
              test: /\.pug$/,
              loader: 'pug-plain-loader'
          }
      ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: path.resolve(__dirname, './public/index.html')
      }),
      new MiniCssExtractPlugin({
          filename: '[name].css'
      }),
      new CleanWebpackPlugin(),
      new VueLoaderPlugin()
  ],
  devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      historyApiFallback: true,
      port: 3000
  }
};