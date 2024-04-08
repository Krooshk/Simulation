import { Grass } from "../Objects/Grass";
import { AddEntity } from "../Actions/AddEntity";

export class AddGrass extends AddEntity {
  constructor(mapOfTheGame) {
    super(mapOfTheGame, 3, 12.5, Grass, "Grass");
  }
};
