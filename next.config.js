const withSass = require('@zeit/next-sass');
const compose = require('next-compose');

module.exports = compose([
  [withSass],
  {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/iterables-and-async-generators-talk' : '',
    '/': { page: '/' }
  }
]);
