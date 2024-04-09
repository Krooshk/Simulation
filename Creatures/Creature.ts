import { Entity }  from "../Main/Entity";
import { BFS }  from "../Utils/BFS";
import { MapOfTheGame } from "../Main/MapOfTheGame";
import { Herbivore } from "./Herbivore";
import { Grass } from "../Objects/Grass";

export class Creature extends Entity {
    velocity: number;
    healthPoints: number;
    isWalked: boolean;

  constructor(velocity: number, healthPoints: number) {
    super();
    this.velocity = velocity;
    this.healthPoints = healthPoints;
    this.isWalked = false;
    if (this.constructor == Creature) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }

  makeMove(position: string, mapOfTheGame: MapOfTheGame, goalClass?: Herbivore | Grass, goalName?: string, power?: number) {
    if (this.isWalked) return;

    const pathForGoal = BFS.search(position, mapOfTheGame, goalClass);
    let stepLeft = this.velocity;

    if (!pathForGoal) return;

    while (stepLeft > 0) {
      // goal is near
      if (pathForGoal.length === 2) {
        const pos = pathForGoal[1];

        if (goalName === "Grass") {
          mapOfTheGame.removeEntity(pos);
          this.healthPoints++;
        }

        if (goalName === "Herbivore") {
          const herbivore = mapOfTheGame.getEntity(pos);

          if (power > herbivore.healthPoints) {
            mapOfTheGame.removeEntity(pos);
            this.healthPoints += herbivore.healthPoints;
          } else {
            herbivore.healthPoints -= power;
            this.healthPoints += power;
          }
        }
        stepLeft--;
        continue;
      }

      const difference = pathForGoal.length - 1 - stepLeft;
      const wasted = difference ? stepLeft : pathForGoal.length - 1;
      const pos = pathForGoal[wasted];

      const obj = mapOfTheGame.getEntity(pathForGoal[0]);

      mapOfTheGame.moveEntity(pathForGoal[0], pos, obj);

      pathForGoal.splice(0, wasted);
      stepLeft -= wasted;
    }
    this.isWalked = true;
  }
};
