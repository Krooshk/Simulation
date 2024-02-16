const Entity = require("../Entity.cjs");

module.exports = class Grass extends Entity {
  constructor() {
    super();
    this.view = "🌿"; //🌿
  }
};
