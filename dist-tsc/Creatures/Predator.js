"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Predator = void 0;
const Creature_1 = require("./Creature");
const Herbivore_1 = require("./Herbivore");
class Predator extends Creature_1.Creature {
    constructor(velocity = 1, healthPoints = 3, power = 1) {
        super(velocity, healthPoints);
        this.power = power;
        this.view = "🐺";
    }
    makeMove(position, mapOfTheGame) {
        super.makeMove(position, mapOfTheGame, new Herbivore_1.Herbivore(), "Herbivore", this.power);
    }
}
exports.Predator = Predator;
//# sourceMappingURL=Predator.js.map