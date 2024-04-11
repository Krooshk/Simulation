import { Creature }  from "./Creature";
import { Herbivore } from"./Herbivore";
import { ViewEntityType } from "../types/types";
import { MapOfTheGame } from "../Main/MapOfTheGame";

export class Predator extends Creature {
  power: number;
  view: ViewEntityType;
  constructor(velocity = 1, healthPoints = 3, power = 1) {
    super(velocity, healthPoints);
    this.power = power;
    this.view = "🐺";
  }

  makeMove(position: string, mapOfTheGame: MapOfTheGame) {
    super.makeMove(position, mapOfTheGame, new Herbivore, "Herbivore", this.power);
  }
};
