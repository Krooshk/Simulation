import { Creature }  from "../creatures/creature";
import { Action }  from "./action";
import { MapOfTheGame } from "../main/map_of_the_game";

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
