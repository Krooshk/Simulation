const Creature = require("./Creature.cjs");
const Grass = require("../Objects/Grass.cjs");
const BFS = require("../Utils/BFS.cjs");

module.exports = class Herbivore extends Creature {
  constructor(velocity = 1, healthPoints = 3) {
    super(velocity, healthPoints);
    this.view = "🐄";
  }

  makeMove(position, mapOfTheGame) {
    const pathForGoal = BFS.search(position, mapOfTheGame, Grass);
    console.log({ path: pathForGoal, position });
    // if (pathForGoal) {
    //   const firstStep = pathForGoal[1];
    //   if (pathForGoal.length === 2) {
    //     this.healthPoints++;
    //     array[firstStep] = "  "; // поглощение
    //   } else {
    //     array[index].position = firstStep;
    //     const temp = array[index];
    //     array[index] = "  ";
    //     array[firstStep] = temp;
    //   }
    // }
  }
};
