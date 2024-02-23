const Entity = require("../Entity.cjs");

module.exports = class mapOfTheGame extends Entity {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
    this.size = width * height;
    this.map = new Map();
  }
};
