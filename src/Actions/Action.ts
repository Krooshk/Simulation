import { MapOfTheGame } from "../main/map_of_the_game";
export abstract class Action {
  mapOfTheGame: MapOfTheGame;
  constructor(mapOfTheGame: MapOfTheGame) {
    this.mapOfTheGame = mapOfTheGame;
  }
  produce() {}
};
