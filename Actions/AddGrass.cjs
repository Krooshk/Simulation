const Action = require("./Action.cjs");
const Grass = require("../Objects/Grass.cjs");

module.exports = class AddGrass extends Action {
  constructor(mapOfTheGame) {
    super(mapOfTheGame);
  }

  produce() {
    const { size, width, height } = this.mapOfTheGame;
    const leftGrass = this.mapOfTheGame.getQuantity("Grass");
    let additionalGrass = Math.floor(size / 8);

    if (leftGrass < 3) {
      loop1: for (let i = 0; i < height; i++) {
        loop2: for (let j = 0; j < width; j++) {
          if (additionalGrass === 0) {
            break loop1;
          }
          const pos = `${j}/${i}`;
          const isEmpty = !Boolean(this.mapOfTheGame.getEntity(pos));

          if (isEmpty) {
            this.mapOfTheGame.addEntity(pos, new Grass());
            additionalGrass--;
          }
        }
      }
    }
  }
};
