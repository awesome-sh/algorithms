const HashMap = require('./hashmap');
const LinkedList = require('./linked-list');
const Queue = require('./queue');
const Stack = require('./stack');

/**
 * Data Structure
 */

class Graph {
  constructor() {
    this._nodes = new HashMap();
    this._edges = new HashMap();
  }

  createNode(key, value) {
    const node = {key, value};

    this._nodes.set(key, node);
    this._edges.set(key, new LinkedList());

    return node;
  }

  addEdge(startNode, endNode, weight = 1) {
    // Adjacency List
    this._edges.get(startNode.key).append({node: endNode, weight});
  }

  getEdges(node) {
    return this._edges.get(node.key);
  }

  getNode(key) {
    return this._nodes.get(key);
  }

  getNodes() {
    return this._nodes.values();
  }

  toString() {
    const nodes = this.getNodes();
    let str = '';

    for (let node of nodes) {
      str += `${node.key} -> ${this.getEdges(node).toString()}\n`;
    }

    return str;
  }

  findShortestPath(start, end, algorithm = breadthFirstSearch) {
    const {prev} = algorithm(this, start);
    const result = [];
    let {key} = end;

    while (key) {
      result.unshift(key);
      key = prev[key];
    }

    return result;
  }
}


/**
 * Algorithms
 */

const noop = (f) => f;

// Iterative version
function breadthFirstSearch(graph, start, callback = noop) {
  const visited = {};
  const dist = {};
  const prev = {};
  const nodes = graph.getNodes();
  const queue = new Queue([start]);

  for (let node of nodes) {
    visited[node.key] = false;
    dist[node.key] = Infinity;
  }

  dist[start.key] = 0;
  prev[start.key] = null;
  visited[start.key] = true;

  callback(start);

  while (!queue.isEmpty()) {
    let node = queue.remove();
    let edges = graph.getEdges(node);

    edges.iterate(function(edge) {
      let neighbor = edge.node;

      if (!visited[neighbor.key]) {
        dist[neighbor.key] = dist[node.key] + edge.weight; // weight should be 1 on unweighted graphs
        prev[neighbor.key] = node.key;
        visited[neighbor.key] = true;
        callback(neighbor);

        queue.add(neighbor);
      }
    });
  }

  return {
    dist,
    prev
  };
}

// Recursive version of BFS: https://goo.gl/qN1E4o

// Recursive version
function depthFirstSearch(graph, start, callback = noop) {
  const visited = {};
  const nodes = graph.getNodes();

  for (let node of nodes) {
    visited[node.key] = false;
  }

  function visit(node) {
    let edges = graph.getEdges(node);

    visited[node.key] = true;
    callback(node);

    edges.iterate(function(edge) {
      let neighbor = edge.node;

      if (!visited[neighbor.key]) {
        visit(neighbor);
      }
    });
  }

  visit(start);
}

// Iterative version
function depthFirstSearchIter(graph, start, callback = noop) {
  const visited = {};
  const stack = new Stack([start]);
  const nodes = graph.getNodes();

  for (let node of nodes) {
    visited[node.key] = false;
  }

  visited[start.key] = true;
  callback(start);

  while (!stack.isEmpty()) {
    let node = stack.pop();
    let edges = graph.getEdges(node);

    edges.iterate(function(edge) {
      let neighbor = edge.node;

      if (!visited[neighbor.key]) {
        visited[neighbor.key] = true;
        callback(neighbor);

        stack.push(neighbor);
      }
    });
  }
}

function dijkstra(graph, start) {
  const visited = {};
  const dist = {};
  const prev = {};
  const nodes = graph.getNodes();

  for (let node of nodes) {
    visited[node.key] = false;
    dist[node.key] = Infinity;
  }

  dist[start.key] = 0;

  let key = findLowestCostKey(dist, visited);
  let node = graph.getNode(key);

  while (node) {
    let edges = graph.getEdges(node);

    edges.iterate(function(edge) {
      let neighbor = edge.node;
      let newCost = dist[node.key] + edge.weight;

      if (newCost < dist[neighbor.key]) {
        dist[neighbor.key] = newCost;
        prev[neighbor.key] = node.key;
      }
    });

    visited[node.key] = true;

    key = findLowestCostKey(dist, visited);
    node = graph.getNode(key);
  }

  return {
    dist,
    prev,
  };
}

// Priority Queue?
function findLowestCostKey(dist, visited) {
  const keys = Object.keys(dist);
  let lowestCost = Infinity;
  let lowestCostKey = null;

  for (let key of keys) {
    let cost = dist[key];

    if (cost < lowestCost && !visited[key]) {
      lowestCostKey = key;
      lowestCost = cost;
    }
  }

  return lowestCostKey;
}


module.exports = {
  Graph,
  breadthFirstSearch,
  depthFirstSearch,
  depthFirstSearchIter,
  dijkstra
};

