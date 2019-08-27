const withSass = require('@zeit/next-sass');
const compose = require('next-compose');

module.exports = compose([
  [withSass],
  {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/lunch-and-learn-custom-react-hooks' : '',
    '/': { page: '/' }
  }
]);
