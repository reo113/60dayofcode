// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1,
// find all possible paths from node 0 to node n - 1 and return them in any order.
// The graph is given as follows: graph[i] is a list of all nodes you can visit
// from node i (i.e., there is a directed edge from node i to node graph[i][j]).

function allPathsSOurceTarget(graph) {
  function dfs(node, path) {
    path.push(node);
    if (node === n) {
      res.push([...path]);
    } else {
      for (const neighbor of graph[node]) {
        dfs(neighbor, path);
      }
    }
    path.pop();
  }
  const n = graph.length - 1;
  const res = [];
  dfs(0, []);
  return res;
}

const graph = [[1, 2], [3], [3], []];
console.log(allPathsSOurceTarget(graph));
