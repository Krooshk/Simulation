import { Creature } from "./creature";
import { ViewEntityType } from "../types/types";
import { MapOfTheGame } from "../main/map_of_the_game";

export class Herbivore extends Creature {
  view: ViewEntityType;
  name: string;
  constructor(velocity = 1, healthPoints = 3) {
    super(velocity, healthPoints);
    this.view = "🐄";
    this.name = "Herbivore";
  }

  makeMove(position: string, mapOfTheGame: MapOfTheGame) {
    super.makeMove(position, mapOfTheGame, "Grass");
  }
}
