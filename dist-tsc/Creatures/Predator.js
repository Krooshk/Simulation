"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Predator = void 0;
const creature_1 = require("./creature");
class Predator extends creature_1.Creature {
    constructor(velocity = 1, healthPoints = 3, power = 1) {
        super(velocity, healthPoints);
        this.power = power;
        this.view = "🐺";
        this.name = "Predator";
    }
    makeMove(position, mapOfTheGame) {
        super.makeMove(position, mapOfTheGame, "Herbivore", this.power);
    }
}
exports.Predator = Predator;
//# sourceMappingURL=predator.js.map