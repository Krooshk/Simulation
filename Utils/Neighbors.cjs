module.exports = class Neighbors {
  getNeighbors(position, width, height) {
    const neighbors = [];

    const [x, y] = position.split("/").map((el) => Number(el));

    if (x + 1 < width) {
      // right
      neighbors.push(this.transformToKey(x + 1, y));
    }

    if (x - 1 >= 0) {
      // left
      neighbors.push(this.transformToKey(x - 1, y));
    }

    if (y + 1 < height) {
      // down
      neighbors.push(this.transformToKey(x, y + 1));
    }

    if (y - 1 >= 0) {
      // up
      neighbors.push(this.transformToKey(x, y - 1));
    }

    if (x + 1 < width && y + 1 < height) {
      // right-down corner
      neighbors.push(this.transformToKey(x + 1, y + 1));
    }

    if (x + 1 < width && y - 1 >= 0) {
      // right-up corner
      neighbors.push(this.transformToKey(x + 1, y - 1));
    }

    if (x - 1 >= 0 && y + 1 < height) {
      // left-down corner
      neighbors.push(this.transformToKey(x - 1, y + 1));
    }

    if (x - 1 >= 0 && y - 1 >= 0) {
      // left-up corner
      neighbors.push(this.transformToKey(x - 1, y - 1));
    }

    return neighbors;
  }

  transformToKey(x, y) {
    return [x, y].join("/");
  }
};
