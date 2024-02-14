import { Creature } from "./Creature.js";
import { Grass } from "../Objects/Grass.js";
import { BFS } from "../BFS.js";

export class Herbivore extends Creature {
  constructor(velocity, healthPoints, power) {
    super(velocity, healthPoints);
    this.power = power;
    this.view = "🐄";
  }

  makeMove(index, array, width) {
    const goal = BFS(index, array, width, Grass);
    const temp = array[index];
    array[index] = array[goal];
    array[goal] = temp;
    console.log(goal);
  }
}
