function BFS(start_node, map, width, goal) {
  const queue = [];
  queue.push(start_node);
  const visited = [];
  while (queue.length > 0) {
    const node = queue.unshift();
    if (node == goal) {
      //   return  надо возвращать индекс, чтобы строить путь к элементу
    }
    visited.push(node);
  }
}

function getNeighbors(start_index, map, width) {
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

  //   if

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
}

const example1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const example2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

// Вокруг одного узла максимум 8 узлов
