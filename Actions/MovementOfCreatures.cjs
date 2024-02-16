const Creature = require("../Creatures/Creature.cjs");

module.exports = class MovementOfCreatures {
  constructor(map) {
    this.map = map;
  }

  produce() {
    const mapOfTheGame = this.map.map;
    const width = this.map.width;
    const creatures = mapOfTheGame.filter((el) => {
      if (el instanceof Creature) {
        return true;
      }
    });
    creatures.forEach((el) => {
      el.makeMove(el.position, mapOfTheGame, width);
    });
  }
};
