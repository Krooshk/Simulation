const Creature = require("../Creatures/Creature.cjs");
const Action = require("../Actions/Action.cjs");

module.exports = class MovementOfCreatures extends Action {
  constructor(mapOfTheGame) {
    super(mapOfTheGame);
  }

  produce() {
    const { map } = this.mapOfTheGame;

    for (let [position, obj] of map) {
      if (obj instanceof Creature) {
        obj.makeMove(position, this.mapOfTheGame);
      }
    }
  }
};
