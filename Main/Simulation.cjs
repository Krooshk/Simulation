const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const MapOfGame = require("./MapOfGame.cjs");
const Renderer = require("./Renderer.cjs");
const ArrangeAllObjects = require("../Actions/ArrangeAllObjects.cjs");
const MovementOfCreatures = require("../Actions/MovementOfCreatures.cjs");

class Simulation {
  constructor() {
    this.count = 0;
    this.play = false;
    this.mapOfGame = new MapOfGame(10, 5);
    this.initActions = [];
    this.turnActions = [];
  }

  fillActions() {
    this.initActions.push(
      new ArrangeAllObjects(
        this.mapOfGame.map,
        this.mapOfGame.width * this.mapOfGame.height
      )
    ); // какая-то лажа?
    this.turnActions.push(new MovementOfCreatures(this.mapOfGame));
  }

  initial() {
    this.initActions.forEach((initAction) => {
      initAction.produce();
    });

    this.renderer = new Renderer(this.mapOfGame);
  }

  nextTurn() {
    this.turnActions.forEach((turnAction) => {
      turnAction.produce();
    });

    this.count++;
    this.renderer.show();
  }

  async startSimulation() {
    this.play = true;
    while (this.play) {
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
      if (this.play) this.nextTurn();
    }
  }

  pauseSimulation() {
    this.play = false;
  }
}

const simulation = new Simulation();
simulation.fillActions();
simulation.initial();
simulation.renderer.show();

readline.on("line", (cmd) => {
  if (cmd === "n") {
    simulation.nextTurn();
  }
  if (cmd === "s") {
    simulation.startSimulation();
  }
  if (cmd === "p") {
    simulation.pauseSimulation();
  }
});
