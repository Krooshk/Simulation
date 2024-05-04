import { Herbivore } from "../creatures/herbivore";
import { Predator } from "../creatures/predator";
import { Grass } from "../objects/grass";
import { Rock } from "../objects/rock";
import { Tree } from "../objects/tree";
import { Action } from "./action";
import { MapOfTheGame } from "../main/map_of_the_game";

export type EntitiesType = Herbivore | Predator | Grass | Rock | Tree;
export type Constructible = new () => Herbivore | Predator | Grass | Rock | Tree;

export class ArrangeAllObjects extends Action {
  pull: Constructible[];
  constructor(mapOfTheGame: MapOfTheGame) {
    super(mapOfTheGame);
    this.pull = [Herbivore, Predator, Grass, Rock, Tree];
  }

  produce() {
    const { width, height } = this.mapOfTheGame;
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (Math.random() < 0.5) {
          const obj = new this.pull[Math.floor(Math.random() * 5)]();
          const pos = `${j}/${i}`; // x/y coordinates

          this.mapOfTheGame.addEntity(pos, obj);
        }
      }
    }
  }

  // --simple test--
    // produce() {
    //   const { width, height, map } = this.mapOfTheGame;
    //   const herbivore = new Herbivore();
    // //   const predator = new Predator();
    //   this.mapOfTheGame.addEntity(`${0}/${0}`, herbivore);
    // //   this.mapOfTheGame.addEntity(`${width - 1}/${height - 1}`, predator);
    //   map.set(`${0}/${0}`, herbivore); // x/y coordinates
    // //   map.set(`${width - 1}/${height - 1}`, predator); // x/y coordinates
    // }
};
