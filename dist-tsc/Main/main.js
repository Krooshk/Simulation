"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
const AddGrass_1 = require("../Actions/AddGrass");
const AddHerbivores_1 = require("../Actions/AddHerbivores");
const ArrangeAllObjects_1 = require("../Actions/ArrangeAllObjects");
const MovementOfCreatures_1 = require("../Actions/MovementOfCreatures");
const MapOfTheGame_1 = require("./MapOfTheGame");
const Renderer_1 = require("./Renderer");
class Simulation {
    constructor() {
        this.count = 0;
        this.play = false;
        this.mapOfTheGame = new MapOfTheGame_1.MapOfTheGame(10, 10);
        this.initActions = [];
        this.turnActions = [];
    }
    fillActions() {
        this.initActions.push(new ArrangeAllObjects_1.ArrangeAllObjects(this.mapOfTheGame));
        this.turnActions.push(new MovementOfCreatures_1.MovementOfCreatures(this.mapOfTheGame));
        this.turnActions.push(new AddGrass_1.AddGrass(this.mapOfTheGame));
        this.turnActions.push(new AddHerbivores_1.AddHerbivores(this.mapOfTheGame));
    }
    initial() {
        this.initActions.forEach((initAction) => {
            initAction.produce();
        });
        this.renderer = new Renderer_1.Renderer(this.mapOfTheGame);
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
            if (this.play)
                this.nextTurn();
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
//# sourceMappingURL=main.js.map