"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Renderer = void 0;
class Renderer {
    constructor(mapOfTheGame) {
        this.mapOfTheGame = mapOfTheGame;
    }
    show() {
        const { width, height } = this.mapOfTheGame;
        let str = "";
        const cells = height * width;
        for (let i = 0; i < cells; i++) {
            const y = Math.floor(i / height);
            const x = i % width;
            if (x === 0 && i !== 0) {
                str += "\n";
            }
            const pos = [x, y].join("/");
            const entity = this.mapOfTheGame.getEntity(pos);
            if (entity) {
                str += entity.view;
            }
            else {
                str += "__";
            }
        }
        console.log(str);
        console.log(this.mapOfTheGame.quantity);
        console.log("////////////////");
    }
}
exports.Renderer = Renderer;
//# sourceMappingURL=renderer.js.map