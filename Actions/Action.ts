export class Action {
  mapOfTheGame: Map<number, number>;
  constructor(mapOfTheGame: Map<number, number>) {
    this.mapOfTheGame = mapOfTheGame;
  }

  produce() {}
};
