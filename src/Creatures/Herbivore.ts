import { Creature } from "./Creature";
import { Grass } from "../Objects/Grass";
import { ViewEntityType } from "../types/types";
import { MapOfTheGame } from "../Main/MapOfTheGame";

export class Herbivore extends Creature {
  view: ViewEntityType;
  name: string;
  constructor(velocity = 1, healthPoints = 3) {
    super(velocity, healthPoints);
    this.view = "🐄";
    this.name = "Herbivore";
  }

  makeMove(position: string, mapOfTheGame: MapOfTheGame) {
    super.makeMove(position, mapOfTheGame, new Grass(), "Grass");
  }
}
