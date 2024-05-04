import { MapOfTheGame } from "../main/map_of_the_game";
import { Neighbors } from "./neighbors";

class BreadthFirstSearch {
  neighbors: Neighbors;
  constructor() {
    this.neighbors = new Neighbors();
  }

  search(
    position: string,
    mapOfTheGame: MapOfTheGame,
    goal: string,
  ) {
    const { width, height, map } = mapOfTheGame;
    const queue = [];
    queue.push([position]);
    const visited = [];

    while (queue.length > 0) {
      const path = queue.shift();
      const lastPosition = path.at(-1);

      if (visited.includes(lastPosition)) continue;

      const node = map.get(lastPosition);

      if (node?.name && node.name === goal) {
        return path;
      }

      visited.push(lastPosition);

      const neighborsPositions = this.neighbors.getNeighbors(
        lastPosition,
        width,
        height
      );

      const filterPositions = neighborsPositions.filter((pos) => {
        const lastPositionQueue = queue.map((array) => array.at(-1));

        if (lastPositionQueue.includes(pos)) {
          return false;
        }

        if (!visited.includes(pos) && map.get(pos)?.name === goal) {
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

export const BFS = new BreadthFirstSearch();
