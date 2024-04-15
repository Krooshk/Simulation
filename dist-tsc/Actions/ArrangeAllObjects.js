"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrangeAllObjects = void 0;
const Herbivore_1 = require("../Creatures/Herbivore");
const Predator_1 = require("../Creatures/Predator");
const Grass_1 = require("../Objects/Grass");
const Rock_1 = require("../Objects/Rock");
const Tree_1 = require("../Objects/Tree");
const Action_1 = require("./Action");
class ArrangeAllObjects extends Action_1.Action {
    constructor(mapOfTheGame) {
        super(mapOfTheGame);
        this.pull = [Herbivore_1.Herbivore, Predator_1.Predator, Grass_1.Grass, Rock_1.Rock, Tree_1.Tree];
    }
    produce() {
        const { width, height } = this.mapOfTheGame;
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                if (Math.random() < 0.5) {
                    const obj = new this.pull[Math.floor(Math.random() * 5)]();
                    const pos = `${j}/${i}`; // x/y coordinates
                    this.mapOfTheGame.addEntity(pos, obj);
                }
            }
        }
    }
}
exports.ArrangeAllObjects = ArrangeAllObjects;
;
//# sourceMappingURL=ArrangeAllObjects.js.map