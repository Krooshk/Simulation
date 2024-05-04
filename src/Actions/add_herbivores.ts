import { AddEntity } from "./add_entity";
import { Herbivore } from "../creatures/herbivore";
import { MapOfTheGame } from "../main/map_of_the_game";

export class AddHerbivores extends AddEntity {
  constructor(mapOfTheGame: MapOfTheGame) {
    super(mapOfTheGame, 2, 12.5, Herbivore, "Herbivore");
  }
};
