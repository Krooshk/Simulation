"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BFS = void 0;
const neighbors_1 = require("./neighbors");
class BreadthFirstSearch {
    constructor() {
        this.neighbors = new neighbors_1.Neighbors();
    }
    search(position, mapOfTheGame, goal) {
        // console.log(goal);
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
                var _a;
                const lastPositionQueue = queue.map((array) => array.at(-1));
                if (lastPositionQueue.includes(pos)) {
                    return false;
                }
                // BUG?: check condition
                if (!visited.includes(pos) && ((_a = map.get(pos)) === null || _a === void 0 ? void 0 : _a.name) === goal) {
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
//# sourceMappingURL=bfs.js.map