const Entity = require("../Entity.cjs");
const Neighbors = require("./Neighbors.cjs");

class BreadthFirstSearch {
  constructor() {
    this.neighbors = new Neighbors();
  }

  search(position, mapOfTheGame, goal) {
    const { width, height, map } = mapOfTheGame;
    const queue = [];
    queue.push([position]);
    const visited = [];

    while (queue.length > 0) {
      const path = queue.shift();
      const lastPosition = path.at(-1);
      const node = map.get(lastPosition);

      if (node instanceof goal) {
        return path;
      }

      visited.push(lastPosition);

      const neighborsPositions = this.neighbors.getNeighbors(
        lastPosition,
        width,
        height
      );

      const filterPositions = neighborsPositions.filter((pos) => {
        if (!visited.includes(pos) && map.get(pos) instanceof goal) {
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

const BFS = new BreadthFirstSearch();
module.exports = BFS;
