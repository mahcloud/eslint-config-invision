var rules = require("./index.json");

// When we package the module, it's not finding common.json for some reason
// This overrides that to use the module name instead
rules.extends = "invision/common";

module.exports = rules;
