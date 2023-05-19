const cookieNames = require('./enums/cookieNameEnum');

module.exports = {
  integrations: {
    medusa: {
      location: '@vue-storefront/medusa-api/server',
      configuration: {
        api: process.env.MEDUSA_API_URL || 'http://localhost:9000',
        cookies: {
          ...cookieNames
        },
        customOptions: {
          maxRetries: 10
        }
      }
    }
  }
};
