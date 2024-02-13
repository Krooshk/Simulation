import { Creature } from "./Creature.js";

export class Herbivore extends Creature {
  constructor(velocity, healthPoints, power) {
    super(velocity, healthPoints);
    this.power = power;
    this.view = "🐄";
  }
  makeMove() {
    // Стремятся найти ресурс (траву),
    // может потратить свой ход на движение в сторону травы, либо на её поглощение.
  }
}
