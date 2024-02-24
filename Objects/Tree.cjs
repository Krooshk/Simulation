const Entity = require("../Main/Entity.cjs");

module.exports = class Tree extends Entity {
  constructor() {
    super();
    this.view = "🌳";
  }
};
