import { Grass } from "../objects/grass";
import { AddEntity } from "./add_entity";
import { MapOfTheGame } from "../main/map_of_the_game";

export class AddGrass extends AddEntity {
  constructor(mapOfTheGame: MapOfTheGame) {
    super(mapOfTheGame, 3, 12.5, Grass, "Grass");
  }
};
