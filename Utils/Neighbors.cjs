module.exports = class Neighbors {
  getNeighbors(start_index, width, height) {
    const neighborsIndexes = [
      start_index - width - 1,
      start_index - width,
      start_index - width + 1,
      start_index + 1,
      start_index + width + 1,
      start_index + width,
      start_index + width - 1,
      start_index - 1,
    ];

    const cases = {
      leftUpCorner: [3, 4, 5],
      rightUpCorner: [5, 6, 7],
      leftDownCorner: [1, 2, 3],
      rightDownCorner: [0, 1, 7],
      left: [1, 2, 3, 4, 5],
      right: [0, 1, 5, 6, 7],
      up: [3, 4, 5, 6, 7],
      down: [0, 1, 2, 3, 7],
    };

    if (start_index === 0) {
      return neighborsIndexes.filter((_, index) =>
        cases.leftUpCorner.includes(index)
      );
    }

    if (start_index === width - 1) {
      return neighborsIndexes.filter((_, index) =>
        cases.rightUpCorner.includes(index)
      );
    }

    if (start_index === width * (height - 1)) {
      return neighborsIndexes.filter((_, index) =>
        cases.leftDownCorner.includes(index)
      );
    }

    if (start_index === width * height - 1) {
      return neighborsIndexes.filter((_, index) =>
        cases.rightDownCorner.includes(index)
      );
    }

    if (start_index % width === 0) {
      return neighborsIndexes.filter((_, index) => cases.left.includes(index));
    }

    if ((start_index + 1) % width === 0) {
      return neighborsIndexes.filter((_, index) => cases.right.includes(index));
    }

    if (start_index < width) {
      return neighborsIndexes.filter((_, index) => cases.up.includes(index));
    }

    if (start_index < width * height) {
      return neighborsIndexes.filter((_, index) => cases.down.includes(index));
    }
  }
};
