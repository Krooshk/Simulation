import { AddEntity } from "../Actions/AddEntity";
import { Herbivore } from "../Creatures/Herbivore";

export class AddHerbivores extends AddEntity {
  constructor(mapOfTheGame) {
    super(mapOfTheGame, 2, 12.5, Herbivore, "Herbivore");
  }
};
