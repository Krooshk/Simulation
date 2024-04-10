const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

import  { MapOfTheGame } from "./MapOfTheGame";
import { Renderer } from "./Renderer";
import { ArrangeAllObjects }  from "../Actions/ArrangeAllObjects";
import { MovementOfCreatures } from "../Actions/MovementOfCreatures";
import { AddGrass } from "../Actions/AddGrass";
import { AddHerbivores } from "../Actions/AddHerbivores";

class Simulation {
  count: number;
  play: boolean;
  mapOfTheGame: MapOfTheGame;
  initActions: [];
  turnActions: [];

  constructor() {
    this.count = 0;
    this.play = false;
    this.mapOfTheGame = new MapOfTheGame(10, 10);
    this.initActions = [];
    this.turnActions = [];
  }

  fillActions() {
    this.initActions.push(new ArrangeAllObjects(this.mapOfTheGame));
    this.turnActions.push(new MovementOfCreatures(this.mapOfTheGame));
    this.turnActions.push(new AddGrass(this.mapOfTheGame));
    this.turnActions.push(new AddHerbivores(this.mapOfTheGame));
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
        setTimeout(resolve, 500);
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
