"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddGrass = void 0;
const Grass_1 = require("../Objects/Grass");
const AddEntity_1 = require("./AddEntity");
class AddGrass extends AddEntity_1.AddEntity {
    constructor(mapOfTheGame) {
        super(mapOfTheGame, 3, 12.5, Grass_1.Grass, "Grass");
    }
}
exports.AddGrass = AddGrass;
;
//# sourceMappingURL=AddGrass.js.map