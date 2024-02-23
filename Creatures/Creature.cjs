const Entity = require("../Entity.cjs");
const BFS = require("../Utils/BFS.cjs");
const Grass = require("../Objects/Grass.cjs");

module.exports = class Creature extends Entity {
  constructor(velocity, healthPoints) {
    super();
    this.velocity = velocity;
    this.healthPoints = healthPoints;
    this.isWalked = false;
    if (this.constructor == Creature) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }

  makeMove(position, mapOfTheGame, stepLeft = this.velocity) {
    if (stepLeft === 0 || this.isWalked) return;
    const { map } = mapOfTheGame;
    const pathForGoal = BFS.search(position, mapOfTheGame, Grass);
    console.log(stepLeft, pathForGoal);
    if (pathForGoal) {
      if (pathForGoal.length === 2) {
        // goal is near
        const pos = pathForGoal[1];

        map.delete(pos);
        this.healthPoints++;
        this.makeMove(position, mapOfTheGame, stepLeft - 1);
      } else {
        const difference = pathForGoal.length - 1 - stepLeft;
        const wasted = difference ? stepLeft : pathForGoal.length - 1;
        const pos = pathForGoal[wasted];

        const obj = map.get(pathForGoal[0]);
        map.delete(pathForGoal[0]);
        map.set(pos, obj);
        if (stepLeft - wasted === 0) {
          this.isWalked = true;
        }
        this.makeMove(pos, mapOfTheGame, stepLeft - wasted);
      }
    }
  }
};
