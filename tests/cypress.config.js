const { defineConfig } = require('cypress')
const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions')

require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      config = cypressBrowserPermissionsPlugin(on, config)
      
      return config
    },

    baseUrl: 'http://localhost:3000',
    viewportWidth: 1920,
    viewportHeight: 1080,

    env: {
        browserPermissions: {
        notifications: 'allow',
        geolocation: 'allow'
      }
    }
  },
});
