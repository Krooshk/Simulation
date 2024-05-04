"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovementOfCreatures = void 0;
const creature_1 = require("../creatures/creature");
const action_1 = require("./action");
class MovementOfCreatures extends action_1.Action {
    constructor(mapOfTheGame) {
        super(mapOfTheGame);
    }
    produce() {
        const { map } = this.mapOfTheGame;
        for (let [position, obj] of map) {
            if (obj instanceof creature_1.Creature) {
                obj.makeMove(position, this.mapOfTheGame);
            }
        }
        for (let [_, obj] of map) {
            if (obj instanceof creature_1.Creature) {
                obj.isWalked = false;
            }
        }
    }
}
exports.MovementOfCreatures = MovementOfCreatures;
;
//# sourceMappingURL=movement_of_creatures.js.map