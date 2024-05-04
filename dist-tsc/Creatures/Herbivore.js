"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Herbivore = void 0;
const creature_1 = require("./creature");
class Herbivore extends creature_1.Creature {
    constructor(velocity = 1, healthPoints = 3) {
        super(velocity, healthPoints);
        this.view = "🐄";
        this.name = "Herbivore";
    }
    makeMove(position, mapOfTheGame) {
        super.makeMove(position, mapOfTheGame, "Grass");
    }
}
exports.Herbivore = Herbivore;
//# sourceMappingURL=herbivore.js.map