import { Entity } from "../Entity";

export class Creature extends Entity {
  constructor(velocity, healthPoints) {
    super();
    this.velocity = velocity;
    this.healthPoints = healthPoints;
    if (this.constructor == Creature) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }

  makeMove() {
    throw new Error("The makeMove() method must be implemented in subclasses");
  }
}
