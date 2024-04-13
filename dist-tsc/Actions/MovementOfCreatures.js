"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovementOfCreatures = void 0;
const Creature_1 = require("../Creatures/Creature");
const Action_1 = require("./Action");
class MovementOfCreatures extends Action_1.Action {
    constructor(mapOfTheGame) {
        super(mapOfTheGame);
    }
    produce() {
        const { map } = this.mapOfTheGame;
        for (let [position, obj] of map) {
            if (obj instanceof Creature_1.Creature) {
                obj.makeMove(position, this.mapOfTheGame);
            }
        }
        for (let [_, obj] of map) {
            if (obj instanceof Creature_1.Creature) {
                obj.isWalked = false;
            }
        }
    }
}
exports.MovementOfCreatures = MovementOfCreatures;
;
//# sourceMappingURL=MovementOfCreatures.js.map