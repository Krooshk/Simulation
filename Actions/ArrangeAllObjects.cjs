const Herbivore = require("../Creatures/Herbivore.cjs");
const Predator = require("../Creatures/Predator.cjs");
const Grass = require("../Objects/Grass.cjs");
const Rock = require("../Objects/Rock.cjs");
const Tree = require("../Objects/Tree.cjs");
const Action = require("../Actions/Action.cjs");

module.exports = class ArrangeAllObjects extends Action {
  constructor(mapOfTheGame) {
    super(mapOfTheGame);
    this.pull = [Herbivore, Predator, Grass, Rock, Tree];
  }

  //   produce() {
  //     const { width, height, map } = this.mapOfTheGame;
  //     for (let i = 0; i < height; i++) {
  //       for (let j = 0; j < width; j++) {
  //         if (Math.random() < 0.5) {
  //           const obj = new this.pull[Math.floor(Math.random() * 5)]();
  //           map.set(`${j}/${i}`, obj); // x/y coordinates
  //         }
  //       }
  //     }
  //   }

  produce() {
    const { width, height, map } = this.mapOfTheGame;
    map.set(`${0}/${0}`, new Herbivore()); // x/y coordinates
    map.set(`${width - 1}/${height - 1}`, new Grass()); // x/y coordinates
  }
};
