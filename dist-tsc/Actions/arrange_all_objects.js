"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrangeAllObjects = void 0;
const herbivore_1 = require("../creatures/herbivore");
const predator_1 = require("../creatures/predator");
const grass_1 = require("../objects/grass");
const rock_1 = require("../objects/rock");
const tree_1 = require("../objects/tree");
const action_1 = require("./action");
class ArrangeAllObjects extends action_1.Action {
    constructor(mapOfTheGame) {
        super(mapOfTheGame);
        this.pull = [herbivore_1.Herbivore, predator_1.Predator, grass_1.Grass, rock_1.Rock, tree_1.Tree];
    }
    produce() {
        const { width, height } = this.mapOfTheGame;
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                if (Math.random() < 0.5) {
                    const obj = new this.pull[Math.floor(Math.random() * 5)]();
                    const pos = `${j}/${i}`; // x/y coordinates
                    this.mapOfTheGame.addEntity(pos, obj);
                }
            }
        }
    }
}
exports.ArrangeAllObjects = ArrangeAllObjects;
;
//# sourceMappingURL=arrange_all_objects.js.map