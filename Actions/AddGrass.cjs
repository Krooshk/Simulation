const Grass = require("../Objects/Grass.cjs");
const AddEntity = require("../Actions/AddEntity.cjs");

module.exports = class AddGrass extends AddEntity {
  constructor(mapOfTheGame) {
    super(mapOfTheGame, 3, 12.5, Grass, "Grass");
  }
};
