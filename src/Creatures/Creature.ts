import { Entity } from "../main/entity";
import { MapOfTheGame } from "../main/map_of_the_game";
import { BFS } from "../utils/bfs";
import { Herbivore } from "./herbivore";

export abstract class Creature extends Entity {
  velocity: number;
  healthPoints: number;
  isWalked: boolean;

  constructor(velocity: number, healthPoints: number) {
    super();
    this.velocity = velocity;
    this.healthPoints = healthPoints;
    this.isWalked = false;
  }

  makeMove(
    position: string,
    mapOfTheGame: MapOfTheGame,
    goalName?: string,
    power?: number
  ) {
    if (this.isWalked) return;

    const pathForGoal = BFS.search(position, mapOfTheGame, goalName);
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
          if (herbivore instanceof Herbivore) {
            if (power > herbivore.healthPoints) {
              mapOfTheGame.removeEntity(pos);
              this.healthPoints += herbivore.healthPoints;
            } else {
              herbivore.healthPoints -= power;
              this.healthPoints += power;
            }
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
}
