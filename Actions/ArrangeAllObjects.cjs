// import { Herbivore } from "../Creatures/Herbivore.js";
// import { Predator } from "../Creatures/Predator.js";
// import { Grass } from "../Objects/Grass.js";
// import { Rock } from "../Objects/Rock.js";
// import { Tree } from "../Objects/Tree.js";
const Herbivore = require("../Creatures/Herbivore.cjs");
const Predator = require("../Creatures/Predator.cjs");
const Grass = require("../Objects/Grass.cjs");
const Rock = require("../Objects/Rock.cjs");
const Tree = require("../Objects/Tree.cjs");
module.exports = class ArrangeAllObjects {
  constructor() {
    this.pull = [Herbivore, Predator, Grass, Rock, Tree];
  }

  arrange(map, length) {
    for (let i = 0; i < length; i++) {
      if (Math.random() < 0.5) {
        map[i] = new this.pull[Math.floor(Math.random() * 5)]();
        map[i].position = i;
      } else {
        map[i] = "  ";
      }
    }
    // console.log(map);
  }
};
