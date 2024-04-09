import { Grass } from "../Objects/Grass";
import { AddEntity } from "../Actions/AddEntity";
import { MapOfTheGame } from "../Main/MapOfTheGame";

export class AddGrass extends AddEntity {
  constructor(mapOfTheGame: MapOfTheGame) {
    super(mapOfTheGame, 3, 12.5, Grass, "Grass");
  }
};
