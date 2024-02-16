const Entity = require("../Entity.cjs");

module.exports = class Rock extends Entity {
  constructor() {
    super();
    this.view = "🗿";
  }
};
