"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddHerbivores = void 0;
const AddEntity_1 = require("./AddEntity");
const Herbivore_1 = require("../Creatures/Herbivore");
class AddHerbivores extends AddEntity_1.AddEntity {
    constructor(mapOfTheGame) {
        super(mapOfTheGame, 2, 12.5, Herbivore_1.Herbivore, "Herbivore");
    }
}
exports.AddHerbivores = AddHerbivores;
;
//# sourceMappingURL=AddHerbivores.js.map