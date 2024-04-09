import { MapOfTheGame } from "../Main/MapOfTheGame";
export abstract class Action {
  mapOfTheGame: MapOfTheGame;
  constructor(mapOfTheGame: MapOfTheGame) {
    this.mapOfTheGame = mapOfTheGame;
  }

  produce() {}
};
