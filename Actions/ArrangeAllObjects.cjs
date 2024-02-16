const Herbivore = require("../Creatures/Herbivore.cjs");
const Predator = require("../Creatures/Predator.cjs");
const Grass = require("../Objects/Grass.cjs");
const Rock = require("../Objects/Rock.cjs");
const Tree = require("../Objects/Tree.cjs");

module.exports = class ArrangeAllObjects {
  constructor(map, length) {
    this.pull = [Herbivore, Predator, Grass, Rock, Tree];
    this.map = map;
    this.length = length;
  }

  produce() {
    for (let i = 0; i < this.length; i++) {
      if (Math.random() < 0.5) {
        this.map[i] = new this.pull[Math.floor(Math.random() * 5)]();
        this.map[i].position = i;
      } else {
        this.map[i] = "  ";
      }
    }
  }
};
