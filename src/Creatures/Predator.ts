import { Creature } from "./creature";
import { ViewEntityType } from "../types/types";
import { MapOfTheGame } from "../main/map_of_the_game";

export class Predator extends Creature {
  power: number;
  name: string;
  view: ViewEntityType;
  constructor(velocity = 1, healthPoints = 3, power = 1) {
    super(velocity, healthPoints);
    this.power = power;
    this.view = "🐺";
    this.name = "Predator";
  }

  makeMove(position: string, mapOfTheGame: MapOfTheGame) {
    super.makeMove(
      position,
      mapOfTheGame,
      "Herbivore",
      this.power
    );
  }
}
