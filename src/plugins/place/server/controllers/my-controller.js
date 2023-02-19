'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('place')
      .service('myService')
      .getWelcomeMessage();
  },
});
