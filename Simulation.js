import { MapOfGame } from "./MapOfGame";

class Simulation {
  constructor() {
    this.count = 0;
    this.play = false;
    this.mapOfGame = new MapOfGame();
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
