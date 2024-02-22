const Herbivore = require("../Creatures/Herbivore.cjs");
const Predator = require("../Creatures/Predator.cjs");
const Grass = require("../Objects/Grass.cjs");
const Rock = require("../Objects/Rock.cjs");
const Tree = require("../Objects/Tree.cjs");
const Action = require("../Actions/Action.cjs");

module.exports = class ArrangeAllObjects extends Action {
  constructor(mapOfGame) {
    super(mapOfGame);
    this.pull = [Herbivore, Predator, Grass, Rock, Tree];
  }

  produce() {
    for (let i = 0; i < this.mapOfGame.height; i++) {
      for (let j = 0; j < this.mapOfGame.width; j++) {
        if (Math.random() < 0.5) {
          const obj = new this.pull[Math.floor(Math.random() * 5)]();
          this.mapOfGame.set(`${j}/${i}`, obj); // x/y coordinates
        }
      }
    }
  }
};
