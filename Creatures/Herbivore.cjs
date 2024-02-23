const Creature = require("./Creature.cjs");
const Grass = require("../Objects/Grass.cjs");
const BFS = require("../Utils/BFS.cjs");

module.exports = class Herbivore extends Creature {
  constructor(velocity = 1, healthPoints = 3) {
    super(velocity, healthPoints);
    this.view = "🐄";
  }

  makeMove(position, mapOfTheGame) {
    super.makeMove(position, mapOfTheGame, Grass);
  }
};
