"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddHerbivores = void 0;
const add_entity_1 = require("./add_entity");
const herbivore_1 = require("../creatures/herbivore");
class AddHerbivores extends add_entity_1.AddEntity {
    constructor(mapOfTheGame) {
        super(mapOfTheGame, 2, 12.5, herbivore_1.Herbivore, "Herbivore");
    }
}
exports.AddHerbivores = AddHerbivores;
;
//# sourceMappingURL=add_herbivores.js.map