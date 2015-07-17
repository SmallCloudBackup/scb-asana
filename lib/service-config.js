function ScbServiceAsanaConfig() {
  this.config_view = "scb-service-asana-config";
  /** Gets called by the config app to commit configuration of a given service instance to the database. */
  this.commitConfiguration = function (serviceName, options) {

  }

  /** Check if provided configuration is valid. */
  this.validateConfiguration = function (options) {
  }

  /** Read configuration from scb-core entity and prepare it to populate config screen. */
  this.readConfiguration = function (serviceInstance) {
    return {
      "options": serviceInstance.options
    };
  }

  /** Read configured services from the scb-core */
  this.readAllConfigurations = function () {
  }

  return this;
}

module.exports = ScbServiceAsanaConfig;
