import Graph, { Node } from '../data-structure/graph'
import { breadthFirstSearch } from '../algorithms/breadth-first-search'

export function calculateDistanceToNodes(graph: Graph, start: Node) {
  const dist = {}
  const path = {}
  const nodes = graph.getNodes()

  for (const node of nodes) {
    dist[node.key] = Infinity
  }

  dist[start.key] = 0
  path[start.key] = null

  function visit (node: Node, origin: Node) {
    if (node === start) {
      return
    }

    const weight = graph.getEdgeWeight(origin, node)
    dist[node.key] = dist[origin.key] + weight // weight should be 1 on unweighted graphs
    path[node.key] = origin.key
  }

  breadthFirstSearch(graph, start, visit)

  return {
    dist,
    path
  }
}

