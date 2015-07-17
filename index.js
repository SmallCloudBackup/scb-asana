/**
 * SmallCloudBackup - Asana Source
 *
 * Source data capture from Asana project management
 */

var scbModule = {
  "sources": {
    "asana": {
      "module": require("./lib/source"),
      "config": require("./lib/source-config")
    }
  },
  "services": {
    "asana": {
      "module": require("./lib/service"),
      "config": require("./lib/service-config")
    }
  }
};

module.exports = scbModule;
