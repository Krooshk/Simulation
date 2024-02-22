const Entity = require("../Entity.cjs");
const Neighbors = require("./Neighbors.cjs");

class BreadthFirstSearch {
  constructor() {
    this.neighbors = new Neighbors();
  }

  search(position, mapOfTheGame, goal) {
    const height = map.length / width;
    const queue = [];
    queue.push([position]);
    const visited = [];

    while (queue.length > 0) {
      const path = queue.shift();
      const index = path.at(-1);
      const node = map[index];

      if (node instanceof goal) {
        return path;
      }

      visited.push(index);

      const neighborsIndexes = this.neighbors.getNeighbors(
        index,
        width,
        height
      );

      const filterIndexes = neighborsIndexes.filter((ind) => {
        if (!visited.includes(ind) && map[ind] instanceof goal) {
          return true;
        }
        if (!visited.includes(ind) && !(map[ind] instanceof Entity)) {
          return true;
        }
        return false;
      });

      const filterIndexesWithHistory = filterIndexes.map((el) => [...path, el]);
      queue.push(...filterIndexesWithHistory);
    }
    return null;
  }
}

const BFS = new BreadthFirstSearch();
module.exports = BFS;
