// import { Entity } from "../Entity.js";
const Entity = require("../Entity.cjs");

module.exports = class Tree extends Entity {
  constructor() {
    super();
    this.view = "🌳";
  }
};
