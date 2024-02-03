// import { MapOfGame } from "./MapOfGame";
import { Renderer } from "./Renderer.js";

class Simulation {
  constructor() {
    this.count = 0;
    this.play = false;
    // this.mapOfGame = new MapOfGame();
    this.renderer = new Renderer();
  }

  nextTurn() {}

  startSimulation() {
    this.play = true;
    while (this.play) {
      this.nextTurn();
    }
  }

  pauseSimulation() {
    this.play = false;
  }
}

console.log("here");

const simulation = new Simulation();

simulation.renderer.initialize();
