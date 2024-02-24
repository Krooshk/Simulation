const Action = require("./Action.cjs");

module.exports = class AddEntity extends Action {
  constructor(
    mapOfTheGame,
    lowerLimit,
    percent,
    additionalElement,
    nameElement
  ) {
    super(mapOfTheGame);
    this.lowerLimit = lowerLimit;
    this.percent = percent;
    this.additionalElement = additionalElement;
    this.nameElement = nameElement;
  }

  produce() {
    const { size, width, height } = this.mapOfTheGame;
    const leftElements = this.mapOfTheGame.getQuantity(this.nameElement);
    let additionalCount = Math.floor((size * this.percent) / 100);

    if (leftElements < this.lowerLimit) {
      loop1: for (let i = 0; i < height; i++) {
        loop2: for (let j = 0; j < width; j++) {
          if (additionalCount === 0) {
            break loop1;
          }
          const pos = `${j}/${i}`;
          const isEmpty = !Boolean(this.mapOfTheGame.getEntity(pos));

          if (isEmpty) {
            this.mapOfTheGame.addEntity(pos, new this.additionalElement());
            additionalCount--;
          }
        }
      }
    }
  }
};
