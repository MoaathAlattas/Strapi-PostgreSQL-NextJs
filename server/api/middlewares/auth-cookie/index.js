'use strict'

const _ = require('lodash')

module.exports = strapi => {
  return {
    beforeInitialize() {
      strapi.app.use(async (ctx, next) => {
        await next();
      })

      // strapi.plugins['users-permissions'].config.routes.filter(r => r.path === '/auth/local')[0].config.policies.unshift('auth-cookie')

    },

    initialize() { },

  }
}
