const Entity = require("../Entity.cjs");

module.exports = class Renderer {
  constructor(map) {
    this.mapOfTheGame = map;
  }

  show() {
    const width = this.mapOfTheGame.width;
    const arrayOfObjects = this.mapOfTheGame.map;
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
