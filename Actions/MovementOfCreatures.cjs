const Creature = require("../Creatures/Creature.cjs");
const Action = require("../Actions/Action.cjs");

module.exports = class MovementOfCreatures extends Action {
  constructor(mapOfGame) {
    super(mapOfGame);
  }

  produce() {
    const map = this.mapOfGame.map;

    for (let [position, obj] of map) {
      if (obj instanceof Creature) {
        obj.makeMove(position, mapOfTheGame);
      }
    }
  }
};
