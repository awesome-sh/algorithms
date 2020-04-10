import Graph, { Node } from '../data-structure/graph'
import { breadthFirstSearch } from '../algorithms/breadth-first-search'

export function calculateDistanceToNodes(graph: Graph, start: Node) {
  const dist = {}
  const prev = {}
  const nodes = graph.getNodes()

  for (const node of nodes) {
    dist[node.key] = Infinity
  }

  dist[start.key] = 0
  prev[start.key] = null

  function visit (node: Node, origin: Node, edge) {
    if (node === start) {
      return
    }

    dist[node.key] = dist[origin.key] + edge.weight // weight should be 1 on unweighted graphs
    prev[node.key] = origin.key
  }

  breadthFirstSearch(graph, start, visit)

  return {
    dist,
    prev
  }
}

