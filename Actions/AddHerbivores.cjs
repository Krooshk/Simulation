const Action = require("./Action.cjs");
const Herbivore = require("../Creatures/Herbivore.cjs");

module.exports = class AddHerbivores extends Action {
  constructor(mapOfTheGame) {
    super(mapOfTheGame);
  }

  produce() {
    const { size, width, height } = this.mapOfTheGame;
    const leftHerbivore = this.mapOfTheGame.getQuantity("Herbivore");
    let additionalHerbivore = Math.floor(size / 8);

    if (leftHerbivore < 2) {
      loop1: for (let i = 0; i < height; i++) {
        loop2: for (let j = 0; j < width; j++) {
          if (additionalHerbivore === 0) {
            break loop1;
          }
          const pos = `${j}/${i}`;
          const isEmpty = !Boolean(this.mapOfTheGame.getEntity(pos));

          if (isEmpty) {
            this.mapOfTheGame.addEntity(pos, new Herbivore());
            additionalHerbivore--;
          }
        }
      }
    }
  }
};
