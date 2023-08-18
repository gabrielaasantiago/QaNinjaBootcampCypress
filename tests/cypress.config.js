const { defineConfig } = require('cypress')
const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions')
const mongo = require('cypress-mongodb')
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      mongo.configurePlugin(on)
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
      },

      mongodb: {
        uri: "mongodb+srv://gabrielaasantiago:xizm57c7ZIdZdzKh@gabiversion.li1ik56.mongodb.net/QTruckDB?retryWrites=true&w=majority",
        database: 'QTruckDB'
      }
    }
  },
});
