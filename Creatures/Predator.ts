import { Creature }  from "./Creature";
import { Herbivore } from"./Herbivore";

export class Predator extends Creature {
  constructor(velocity = 1, healthPoints = 3, power = 1) {
    super(velocity, healthPoints);
    this.power = power;
    this.view = "🐺";
  }

  makeMove(position, mapOfTheGame) {
    super.makeMove(position, mapOfTheGame, Herbivore, "Herbivore", this.power);
  }
};
