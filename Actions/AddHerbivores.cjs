const AddEntity = require("../Actions/AddEntity.cjs");
const Herbivore = require("../Creatures/Herbivore.cjs");

module.exports = class AddHerbivores extends AddEntity {
  constructor(mapOfTheGame) {
    super(mapOfTheGame, 2, 12.5, Herbivore, "Herbivore");
  }
};
