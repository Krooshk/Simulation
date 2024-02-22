const Entity = require("../Entity.cjs");

module.exports = class Renderer {
  constructor(mapOfGame) {
    this.mapOfGame = mapOfGame;
  }

  show() {
    const width = this.mapOfGame.width;
    const arrayOfObjects = this.mapOfGame.map;
    const view = arrayOfObjects.map((el) => {
      if (el instanceof Entity) {
        return el.view;
      } else {
        return el;
      }
    });
    for (let i = 0; i < view.length; i += width) {
      const string = view.slice(i, i + width).join("");
      console.log(string);
    }
    console.log("////////////////");
  }
};
