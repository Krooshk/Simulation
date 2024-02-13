import { Herbivore } from "../Creatures/Herbivore.js";
import { Predator } from "../Creatures/Predator.js";
import { Grass } from "../Objects/Grass.js";
import { Rock } from "../Objects/Rock.js";
import { Tree } from "../Objects/Tree.js";
export class ArrangeAllObjects {
  constructor() {
    this.pull = [
      new Herbivore(),
      new Predator(),
      new Grass(),
      new Rock(),
      new Tree(),
    ];
  }

  arrange(map, length) {
    for (let i = 0; i < length; i++) {
      if (Math.random() > 0.5) {
        map[i] = "__";
      } else {
        map[i] = this.pull[Math.floor(Math.random() * 5)].view;
      }
    }
    // console.log(map);
  }
}
