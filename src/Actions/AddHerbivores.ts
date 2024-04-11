import { AddEntity } from "./AddEntity";
import { Herbivore } from "../Creatures/Herbivore";
import { MapOfTheGame } from "../Main/MapOfTheGame";

export class AddHerbivores extends AddEntity {
  constructor(mapOfTheGame: MapOfTheGame) {
    super(mapOfTheGame, 2, 12.5, Herbivore, "Herbivore");
  }
};
