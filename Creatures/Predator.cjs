const Creature = require("./Creature.cjs");
const Herbivore = require("./Herbivore.cjs");
const BFS = require("../Utils/BFS.cjs");

module.exports = class Predator extends Creature {
  constructor(velocity = 1, healthPoints = 3, power = 1) {
    super(velocity, healthPoints);
    this.power = power;
    this.view = "🐺";
  }
  makeMove(index, array, width) {
    // const pathForGoal = BFS.search(index, array, width, Herbivore);
    // // console.log({ path: pathForGoal, creature: array[index], index: index });
    // if (pathForGoal) {
    //   const firstStep = pathForGoal[1];
    //   if (pathForGoal.length === 2) {
    //     const herbivore = array[firstStep];
    //     const getPoints =
    //       herbivore.healthPoints - this.power <= 0
    //         ? herbivore.healthPoints
    //         : this.power;
    //     this.healthPoints += getPoints;
    //     herbivore.healthPoints -= getPoints;
    //     if (herbivore.healthPoints === 0) {
    //       array[firstStep] = "  "; // поглощение
    //     }
    //   } else {
    //     array[index].position = firstStep;
    //     const temp = array[index];
    //     array[index] = "  ";
    //     array[firstStep] = temp;
    //   }
    // }
  }
};
