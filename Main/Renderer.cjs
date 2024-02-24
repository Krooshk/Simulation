module.exports = class Renderer {
  constructor(mapOfTheGame) {
    this.mapOfTheGame = mapOfTheGame;
  }

  show() {
    const { width, height } = this.mapOfTheGame;
    for (let i = 0; i < height; i++) {
      let str = "";
      for (let j = 0; j < width; j++) {
        const pos = [j, i].join("/");
        const entity = this.mapOfTheGame.getEntity(pos);
        if (entity) {
          str += entity.view;
        } else {
          str += "__";
        }
      }
      console.log(str);
    }
    console.log(this.mapOfTheGame.quantity);
    console.log("////////////////");
  }
};
