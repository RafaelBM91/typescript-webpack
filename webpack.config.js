const path = require('path')

module.exports = {
  entry: ['./src/index.js', './src/index.ts'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: 'node_modules',
        loader: 'ts-loader'
      }
    ]
  }
}
