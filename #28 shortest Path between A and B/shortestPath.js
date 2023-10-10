// Given an (unweighted) connected graph, 
// return the length of the shortest path between two nodes A and B, in terms of the number of edges.
// Assume there always exists a path between nodes A and B.

// Input:
// graph = [[1, 2], [0, 2, 3], [0, 1], [1]]
// A = 0
// B = 3
// Output: 2

function shortestPath(graph, a, b) {
  const queue = [{ node: a, distance: 0 }];
  const visited = new Set();
  while (queue.length > 0) {
    const { node, distance } = queue.shift();
    if (node === b) {
      return distance;
    }
    if (!visited.has(node)) {
      visited.add(node);
      for (const neignbor of graph[node]) {
        queue.push({ node: neignbor, distance: distance + 1 });
      }
    }
  }
  return -1;
}

const graph = [[1, 2], [0, 2, 3], [0, 1], [1]];
let A = 0;
let B = 3;
console.log(shortestPath(graph, A, B));
