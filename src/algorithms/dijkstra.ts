import Graph, { Node, findLowestCostKey } from '../data-structure/graph'

export function dijkstra (graph: Graph, start: Node) {
  const visited = {}
  const dist: any = {}
  const prev = {}
  const nodes = graph.getNodes()

  for (const node of nodes) {
    visited[node.key] = false
    dist[node.key] = Infinity
  }

  dist[start.key] = 0

  let key = findLowestCostKey(dist, visited)
  let node = graph.getNode(key)

  while (node) {
    const neighbors = graph.getNeighbors(node)

    for (const neighbor of neighbors) {
      const edge = graph.getEdge(node, neighbor)
      const newCost = dist[node.key] + edge.weight

      if (newCost < dist[neighbor.key]) {
        dist[neighbor.key] = newCost
        prev[neighbor.key] = node.key
      }
    }

    visited[node.key] = true

    key = findLowestCostKey(dist, visited)
    node = graph.getNode(key)
  }

  return {
    dist,
    prev
  }
}
