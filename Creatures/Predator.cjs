const Creature = require("./Creature.cjs");
const Herbivore = require("./Herbivore.cjs");
const BFS = require("../Utils/BFS.cjs");

module.exports = class Predator extends Creature {
  constructor(velocity = 1, healthPoints = 3, power = 1) {
    super(velocity, healthPoints);
    this.power = power;
    this.view = "🐺";
  }

  makeMove(position, mapOfTheGame) {
    super.makeMove(position, mapOfTheGame, Herbivore, this.power);
  }
};
