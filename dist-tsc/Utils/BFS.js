"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BFS = void 0;
const Herbivore_1 = require("../Creatures/Herbivore");
const Grass_1 = require("../Objects/Grass");
const Neighbors_1 = require("./Neighbors");
class BreadthFirstSearch {
    constructor() {
        this.neighbors = new Neighbors_1.Neighbors();
    }
    search(position, mapOfTheGame, goal) {
        const { width, height, map } = mapOfTheGame;
        const queue = [];
        queue.push([position]);
        const visited = [];
        while (queue.length > 0) {
            const path = queue.shift();
            const lastPosition = path.at(-1);
            if (visited.includes(lastPosition))
                continue;
            const node = map.get(lastPosition);
            //BUG?: check condition 
            if ((node === null || node === void 0 ? void 0 : node.name) && node.name === goal) {
                return path;
            }
            visited.push(lastPosition);
            const neighborsPositions = this.neighbors.getNeighbors(lastPosition, width, height);
            const filterPositions = neighborsPositions.filter((pos) => {
                const lastPositionQueue = queue.map((array) => array.at(-1));
                if (lastPositionQueue.includes(pos)) {
                    return false;
                }
                // BUG?: check condition
                if ((!visited.includes(pos) && map.get(pos) instanceof Herbivore_1.Herbivore) ||
                    (!visited.includes(pos) && map.get(pos) instanceof Grass_1.Grass)) {
                    return true;
                }
                if (!visited.includes(pos) && !map.get(pos)) {
                    // empty place
                    return true;
                }
                return false;
            });
            const filterPositionWithHistory = filterPositions.map((el) => [
                ...path,
                el,
            ]);
            queue.push(...filterPositionWithHistory);
        }
        return null;
    }
}
exports.BFS = new BreadthFirstSearch();
//# sourceMappingURL=BFS.js.map