"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddEntity = void 0;
const action_1 = require("./action");
class AddEntity extends action_1.Action {
    constructor(mapOfTheGame, lowerLimit, percent, additionalElement, nameElement) {
        super(mapOfTheGame);
        this.lowerLimit = lowerLimit;
        this.percent = percent;
        this.additionalElement = additionalElement;
        this.nameElement = nameElement;
    }
    produce() {
        const { size, width, height } = this.mapOfTheGame;
        const leftElements = this.mapOfTheGame.getQuantity(this.nameElement);
        let additionalCount = Math.floor((size * this.percent) / 100);
        if (leftElements < this.lowerLimit) {
            const cells = height * width;
            for (let i = 0; i < cells; i++) {
                if (additionalCount === 0) {
                    break;
                }
                const y = Math.floor(i / height);
                const x = i % width;
                const pos = `${x}/${y}`;
                const isEmpty = !Boolean(this.mapOfTheGame.getEntity(pos));
                if (isEmpty) {
                    this.mapOfTheGame.addEntity(pos, new this.additionalElement());
                    additionalCount--;
                }
            }
        }
    }
}
exports.AddEntity = AddEntity;
;
//# sourceMappingURL=add_entity.js.map