const path = require('path');

module.exports = {
  entry: './src/index.js', 
  output: {
    path: path.resolve(__dirname, 'dist'),  
    filename: 'bundle.js',
    assetModuleFilename: 'assets/images/[name][ext][query]', 
  },
  module: { 
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: { 
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'] 
          }
        }
      },
      {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,  // Обработка изображений
        type: 'asset/resource',  // Для Webpack 5
      },
    ]
  },
  devServer: { 
    static: {
      directory: path.resolve(__dirname, "dist"), 
    },
    devMiddleware: {
      publicPath: '/assets/', 
    }
  },
};