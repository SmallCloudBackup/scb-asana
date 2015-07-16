/**
 * SmallCloudBackup - Asana Source
 *
 * Source data capture from Asana project management
 */

var scbModule = {
  "sources": {
    "asana": {
      "module": require("lib/source.js")
    }
  },
  "service": {
    "asana": {
      "module": require("lib/service.js")
    }
  }
};

module.exports = scbModule;
