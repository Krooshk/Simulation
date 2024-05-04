"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddGrass = void 0;
const grass_1 = require("../objects/grass");
const add_entity_1 = require("./add_entity");
class AddGrass extends add_entity_1.AddEntity {
    constructor(mapOfTheGame) {
        super(mapOfTheGame, 3, 12.5, grass_1.Grass, "Grass");
    }
}
exports.AddGrass = AddGrass;
;
//# sourceMappingURL=add_grass.js.map