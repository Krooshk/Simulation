"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapOfTheGame = void 0;
class MapOfTheGame {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.size = width * height;
        this.map = new Map();
        this.quantity = { Herbivore: 0, Predator: 0, Grass: 0, Rock: 0, Tree: 0 };
    }
    addEntity(pos, obj) {
        this.map.set(pos, obj);
        this.incQuantity(obj);
    }
    removeEntity(pos) {
        this.decQuantity(pos);
        this.map.delete(pos);
    }
    getEntity(pos) {
        return this.map.get(pos);
    }
    moveEntity(from, to, obj) {
        this.removeEntity(from);
        this.addEntity(to, obj);
    }
    incQuantity(obj) {
        const { name } = obj;
        this.quantity[name] = this.quantity[name] + 1;
    }
    decQuantity(pos) {
        const { name } = this.getEntity(pos);
        this.quantity[name] = this.quantity[name] - 1;
    }
    getQuantity(name) {
        return this.quantity[name];
    }
}
exports.MapOfTheGame = MapOfTheGame;
//# sourceMappingURL=map_of_the_game.js.map