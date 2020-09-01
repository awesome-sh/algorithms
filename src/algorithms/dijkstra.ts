import HashMap from '../data-structure/hashmap'
import Graph, { Node } from '../data-structure/graph'
import { Dist, Path, Visited } from '../types'

export function dijkstra(
  graph: Graph,
  current: Node
): { dist: Dist; path: Path } {
  const visited: Visited = new HashMap()
  const dist: Dist = new HashMap()
  const path: Path = new HashMap()
  const nodes = graph.getNodes()

  for (const node of nodes) {
    visited.set(node.key, false)
    dist.set(node.key, Infinity)
  }

  dist.set(current.key, 0)

  while (current) {
    const neighbors = graph.getNeighbors(current)

    for (const neighbor of neighbors) {
      const cost =
        dist.get(current.key) + graph.getEdgeWeight(current, neighbor)

      if (cost < dist.get(neighbor.key)) {
        dist.set(neighbor.key, cost)
        path.set(neighbor.key, current.key)
      }
    }

    visited.set(current.key, true)

    // Select next node (greedy part)
    const key = findLowestCostKey(dist, visited)
    current = graph.getNode(key)
  }

  return {
    dist,
    path,
  }
}

// Priority Queue?
export function findLowestCostKey(dist: Dist, visited: Visited): string {
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
