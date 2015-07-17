function ScbSourceAsanaConfig() {
  this.config_view = "scb-source-asana-config";
  /** Gets called by the config app to commit configuration of a given service instance to the database. */
  this.commitConfiguration = function (sourceName, options) {

  }

  /** Check if provided configuration is valid. */
  this.validateConfiguration = function (options) {
  }

  /** Read configuration from scb-core entity and prepare it to populate config screen. */
  this.readConfiguration = function (sourceInstance) {
    return {
      "options": sourceInstance.options
    };
  }
  return this;
}

module.exports = ScbSourceAsanaConfig;
