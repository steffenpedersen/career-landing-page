const path = require('path')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      'preProcessor': 'scss',
      'patterns': [
        path.resolve(__dirname, './src/css/main.scss'),
      ]
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/career-landing-page/'
    : '/'
}
