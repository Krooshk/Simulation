import { Creature }  from "../Creatures/Creature";
import { Action }  from "./Action";
import { MapOfTheGame } from "../Main/MapOfTheGame";

export class MovementOfCreatures extends Action {
  constructor(mapOfTheGame: MapOfTheGame) {
    super(mapOfTheGame);
  }

  produce() {
    const { map } = this.mapOfTheGame;

    for (let [position, obj] of map) {
      if (obj instanceof Creature) {
        obj.makeMove(position, this.mapOfTheGame);
      }
    }

    for (let [_, obj] of map) {
      if (obj instanceof Creature) {
        obj.isWalked = false;
      }
    }
  }
};
