// import { Creature } from "./Creature.js";
// import { Grass } from "../Objects/Grass.js";
// import { BFS } from "../BFS.js";
const Creature = require("./Creature.cjs");
const Grass = require("../Objects/Grass.cjs");
const BFS = require("../BFS.cjs");

module.exports = class Herbivore extends Creature {
  constructor(velocity, healthPoints, power) {
    super(velocity, healthPoints);
    this.power = power;
    this.view = "🐄";
  }

  makeMove(index, array, width) {
    const pathForGoal = BFS(index, array, width, Grass);
    // console.log({ path: pathForGoal, creature: array[index], index: index });
    if (pathForGoal) {
      const firstStep = pathForGoal[1];
      if (pathForGoal.length === 2) {
        array[firstStep] = "  "; // поглощение
      } else {
        array[index].position = firstStep;
        const temp = array[index];
        array[index] = "  ";
        array[firstStep] = temp;
      }
    }
  }
};
