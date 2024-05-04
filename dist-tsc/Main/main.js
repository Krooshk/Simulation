"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
const add_grass_1 = require("../actions/add_grass");
const add_herbivores_1 = require("../actions/add_herbivores");
const arrange_all_objects_1 = require("../actions/arrange_all_objects");
const movement_of_creatures_1 = require("../actions/movement_of_creatures");
const map_of_the_game_1 = require("./map_of_the_game");
const renderer_1 = require("./renderer");
class Simulation {
    constructor() {
        this.count = 0;
        this.play = false;
        this.mapOfTheGame = new map_of_the_game_1.MapOfTheGame(10, 10);
        this.initActions = [];
        this.turnActions = [];
    }
    fillActions() {
        this.initActions.push(new arrange_all_objects_1.ArrangeAllObjects(this.mapOfTheGame));
        this.turnActions.push(new movement_of_creatures_1.MovementOfCreatures(this.mapOfTheGame));
        this.turnActions.push(new add_grass_1.AddGrass(this.mapOfTheGame));
        this.turnActions.push(new add_herbivores_1.AddHerbivores(this.mapOfTheGame));
    }
    initial() {
        this.initActions.forEach((initAction) => {
            initAction.produce();
        });
        this.renderer = new renderer_1.Renderer(this.mapOfTheGame);
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