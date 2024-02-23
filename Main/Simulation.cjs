const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const mapOfTheGame = require("./mapOfTheGame.cjs");
const Renderer = require("./Renderer.cjs");
const ArrangeAllObjects = require("../Actions/ArrangeAllObjects.cjs");
const MovementOfCreatures = require("../Actions/MovementOfCreatures.cjs");

class Simulation {
  constructor() {
    this.count = 0;
    this.play = false;
    this.mapOfTheGame = new mapOfTheGame(10, 5);
    this.initActions = [];
    this.turnActions = [];
  }

  fillActions() {
    this.initActions.push(new ArrangeAllObjects(this.mapOfTheGame)); // какая-то лажа?
    this.turnActions.push(new MovementOfCreatures(this.mapOfTheGame));
  }

  initial() {
    this.initActions.forEach((initAction) => {
      initAction.produce();
    });

    this.renderer = new Renderer(this.mapOfTheGame);
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
