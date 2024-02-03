export class Renderer {
  constructor() {
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
  }

  initialize() {
    this.ctx.strokeRect(30, 30, 510, 510);
    this.ctx.fillStyle = "gray"; // меняем цвет клеток
    this.ctx.fillRect(35, 35, 500, 500);
    // for (let i = 0; i < 10; i++) {
    //   for (let j = 0; j < 10; j++) {
    //     this.ctx.fillStyle = "green";
    //     this.ctx.fillRect(35 + i * 35, 35 + j * 35, 25, 25);
    //     // this.ctx.clearRect(20 + (i + 1) * 32, 20 + (j + 1) * 32, 32, 32);
    //   }
    // }
    this.ctx.font = "bold 25px serif";
    this.ctx.fillText("🌳", 100, 100);
    this.ctx.fillText("🌿", 100, 150);
    this.ctx.fillText("🗿", 100, 50);
    this.ctx.fillText("🐄", 100, 200);
    this.ctx.fillText("🐺", 50, 50);
  }
}
