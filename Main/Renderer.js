export class Renderer {
  constructor(map) {
    this.map = map;
  }

  show() {
    const width = this.map.width;
    const heigth = this.map.height;
    const fields = Number(width) * Number(heigth);
    // console.log(this.map);
    console.log("_".repeat(width));
    for (let i = 0; i < fields; i += width) {
      const string = this.map.map.slice(i, i + width).join("");
      console.log(string);
    }
    console.log("_".repeat(width));
  }
}
