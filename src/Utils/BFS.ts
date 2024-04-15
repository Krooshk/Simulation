import { Herbivore } from "../Creatures/Herbivore";
import { MapOfTheGame } from "../Main/MapOfTheGame";
import { Grass } from "../Objects/Grass";
import { Neighbors } from "./Neighbors";

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

      //BUG?: check condition 
      if (node?.name &&  node.name === goal) {
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

        // BUG?: check condition
        if (
          (!visited.includes(pos) && map.get(pos) instanceof Herbivore) ||
          (!visited.includes(pos) && map.get(pos) instanceof Grass)
        ) {
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
