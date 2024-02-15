// import { AddGrass } from "../Actions/AddGrass.js";
// import { AddHerbivores } from "../Actions/AddHerbivores.js";
// import { MovementOfCreatures } from "../Actions/MovementOfCreatures.js";
// used
// import { MapOfGame } from "./MapOfGame.js";
// import { Renderer } from "./Renderer.js";
// import { ArrangeAllObjects } from "../Actions/ArrangeAllObjects.js";
// import { Creature } from "../Creatures/Creature.js";

const MapOfGame = require("./MapOfGame.cjs");
const Renderer = require("./Renderer.cjs");
const ArrangeAllObjects = require("../Actions/ArrangeAllObjects.cjs");
const Creature = require("../Creatures/Creature.cjs");

class Simulation {
  constructor() {
    this.count = 0;
    this.play = false;
    this.mapOfGame = new MapOfGame(4, 6);
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

  nextTurn() {
    const mapOfTheGame = this.mapOfGame.map;
    const creatures = mapOfTheGame.filter((el) => {
      if (el instanceof Creature) {
        return true;
      }
    });
    creatures.forEach((el) => {
      el.makeMove(el.position, mapOfTheGame, this.mapOfGame.width);
    });
    // console.log(creatures);
    this.renderer.show();
  }

  startSimulation() {
    this.play = true;
    while (this.play) {
      Promise.resolve().then(() => {
        this.nextTurn();
      });
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
// simulation.startSimulation();
simulation.nextTurn();
simulation.nextTurn();
simulation.nextTurn();

// simulation.pauseSimulation();
// setTimeout(() => {
//   simulation.pauseSimulation();
// }, 1000);

// import pkg from "prompt-sync";
// const { prompt } = pkg;
// // const prompt = require("prompt-sync")();

// const name = prompt("What is your name?");
// console.log(`Hey there ${name}`);
