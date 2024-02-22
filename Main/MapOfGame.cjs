const Entity = require("../Entity.cjs");

module.exports = class MapOfGame extends Entity {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
    this.count = width * height;
    this.map = new Map();
  }
};
