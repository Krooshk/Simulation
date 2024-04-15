"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Predator = void 0;
const Creature_1 = require("./Creature");
class Predator extends Creature_1.Creature {
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
//# sourceMappingURL=Predator.js.map