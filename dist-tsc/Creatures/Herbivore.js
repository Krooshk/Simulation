"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Herbivore = void 0;
const Creature_1 = require("./Creature");
const Grass_1 = require("../Objects/Grass");
class Herbivore extends Creature_1.Creature {
    constructor(velocity = 1, healthPoints = 3) {
        super(velocity, healthPoints);
        this.view = "🐄";
        this.name = "Herbivore";
    }
    makeMove(position, mapOfTheGame) {
        super.makeMove(position, mapOfTheGame, new Grass_1.Grass(), "Grass");
    }
}
exports.Herbivore = Herbivore;
//# sourceMappingURL=Herbivore.js.map