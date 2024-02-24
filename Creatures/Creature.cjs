const Entity = require("../Entity.cjs");

const BFS = require("../Utils/BFS.cjs");

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

  makeMove(position, mapOfTheGame, goalClass, goalName, power) {
    if (this.isWalked) return;

    const { map } = mapOfTheGame;
    const pathForGoal = BFS.search(position, mapOfTheGame, goalClass);
    let stepLeft = this.velocity;

    if (!pathForGoal) return;

    while (stepLeft > 0) {
      // goal is near
      if (pathForGoal.length === 2) {
        const pos = pathForGoal[1];

        if (goalName === "Grass") {
          map.delete(pos);
          this.healthPoints++;
        }

        if (goalName === "Herbivore") {
          const herbivore = map.get(pos);

          if (power > herbivore.healthPoints) {
            map.delete(pos);
            this.healthPoints += herbivore.healthPoints;
          } else {
            herbivore.healthPoints -= power;
            this.healthPoints += power;
          }
        }
        stepLeft--;
      } else {
        const difference = pathForGoal.length - 1 - stepLeft;
        const wasted = difference ? stepLeft : pathForGoal.length - 1;
        const pos = pathForGoal[wasted];

        const obj = map.get(pathForGoal[0]);
        map.delete(pathForGoal[0]);
        map.set(pos, obj);

        pathForGoal.splice(0, wasted);
        stepLeft -= wasted;
      }
    }
    this.isWalked = true;
  }
};
