import Graph, { Node } from '../data-structure/graph'

export function dijkstra (graph: Graph, root: Node): {dist: KeyValue, path: KeyValue} {
  const visited: KeyValue = {}
  const dist: KeyValue = {}
  const path: KeyValue = {}
  const nodes = graph.getNodes()

  for (const node of nodes) {
    visited[node.key] = false
    dist[node.key] = Infinity
  }

  dist[root.key] = 0

  let key = findLowestCostKey(dist, visited)
  let node = graph.getNode(key)

  while (node) {
    const neighbors = graph.getNeighbors(node)

    for (const neighbor of neighbors) {
      const edge = graph.getEdge(node, neighbor)
      const newCost = dist[node.key] + edge.weight

      if (newCost < dist[neighbor.key]) {
        dist[neighbor.key] = newCost
        path[neighbor.key] = node.key
      }
    }

    visited[node.key] = true

    key = findLowestCostKey(dist, visited)
    node = graph.getNode(key)
  }

  return {
    dist,
    path
  }
}

// Priority Queue?
export function findLowestCostKey (dist: KeyValue, visited: KeyValue) {
  const keys = Object.keys(dist)
  let lowestCost = Infinity
  let lowestCostKey = null

  for (const key of keys) {
    const cost = dist[key]

    if (cost < lowestCost && !visited[key]) {
      lowestCostKey = key
      lowestCost = cost
    }
  }

  return lowestCostKey
}
