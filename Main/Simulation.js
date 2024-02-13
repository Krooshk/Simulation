import { MapOfGame } from "./MapOfGame.js";
import { Renderer } from "./Renderer.js";
// import { AddGrass } from "../Actions/AddGrass.js";
// import { AddHerbivores } from "../Actions/AddHerbivores.js";
import { ArrangeAllObjects } from "../Actions/ArrangeAllObjects.js";
import { MovementOfCreatures } from "../Actions/MovementOfCreatures.js";

class Simulation {
  constructor() {
    this.count = 0;
    this.play = false;
    this.mapOfGame = new MapOfGame(10, 15);
    this.initActions = [];
    this.turnActions = [];
  }

  fillActions() {
    this.initActions.push(new ArrangeAllObjects());
    // this.turnActions.push(new MovementOfCreatures());
  }

  initial() {
    this.initActions.forEach((el) => {
      el.arrange(
        this.mapOfGame.map,
        this.mapOfGame.width * this.mapOfGame.height
      );
    });
    // console.log(this.mapOfGame);
    this.renderer = new Renderer(this.mapOfGame);
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

// console.log("here");

const simulation = new Simulation();
simulation.fillActions();
simulation.initial();
simulation.renderer.show();
