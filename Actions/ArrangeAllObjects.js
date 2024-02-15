import { Herbivore } from "../Creatures/Herbivore.js";
import { Predator } from "../Creatures/Predator.js";
import { Grass } from "../Objects/Grass.js";
import { Rock } from "../Objects/Rock.js";
import { Tree } from "../Objects/Tree.js";
export class ArrangeAllObjects {
  constructor() {
    this.pull = [Herbivore, Predator, Grass, Rock, Tree];
  }

  arrange(map, length) {
    for (let i = 0; i < length; i++) {
      if (Math.random() < 0.5) {
        map[i] = new this.pull[Math.floor(Math.random() * 5)]();
        map[i].position = i;
      } else {
        map[i] = "  ";
      }
    }
    // console.log(map);
  }
}
