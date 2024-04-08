import { Creature } from "./Creature";
import { Grass } from"../Objects/Grass";

export class Herbivore extends Creature {
  constructor(velocity = 1, healthPoints = 3) {
    super(velocity, healthPoints);
    this.view = "🐄";
  }

  makeMove(position, mapOfTheGame) {
    super.makeMove(position, mapOfTheGame, Grass, "Grass");
  }
};
