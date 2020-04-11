import HashMap from '../data-structure/hashmap'
import Graph, { Node } from '../data-structure/graph'
import { Dist, Path, Visited } from '../types'

export function dijkstra (graph: Graph, root: Node): {dist: Dist, path: Path} {
  const visited: Visited = new HashMap()
  const dist: Dist = new HashMap()
  const path: Path = new HashMap()
  const nodes = graph.getNodes()

  for (const node of nodes) {
    visited.set(node.key, false)
    dist.set(node.key, Infinity)
  }

  dist.set(root.key, 0)

  let key = findLowestCostKey(dist, visited)
  let node = graph.getNode(key)

  while (node) {
    const neighbors = graph.getNeighbors(node)

    for (const neighbor of neighbors) {
      const weight = graph.getEdgeWeight(node, neighbor)
      const newCost = dist.get(node.key) + weight

      if (newCost < dist.get(neighbor.key)) {
        dist.set(neighbor.key, newCost)
        path.set(neighbor.key, node.key)
      }
    }

    visited.set(node.key, true)

    key = findLowestCostKey(dist, visited)
    node = graph.getNode(key)
  }

  return {
    dist,
    path
  }
}

// Priority Queue?
export function findLowestCostKey (dist: Dist, visited: Visited) {
  const keys = dist.keys()
  let lowestCost = Infinity
  let lowestCostKey = null

  for (const key of keys) {
    const cost = dist.get(key)

    if (cost < lowestCost && !visited.get(key)) {
      lowestCostKey = key
      lowestCost = cost
    }
  }

  return lowestCostKey
}
