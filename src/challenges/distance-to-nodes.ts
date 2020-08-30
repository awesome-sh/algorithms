import HashMap from '../data-structure/hashmap'
import Graph, { Node } from '../data-structure/graph'
import { breadthFirstSearch } from '../algorithms/breadth-first-search'

export function calculateDistanceToNodes(
  graph: Graph,
  start: Node
): { dist: HashMap<string, number>; path: HashMap<string, string | null> } {
  const dist = new HashMap<string, number>()
  const path = new HashMap<string, string | null>()
  const nodes = graph.getNodes()

  for (const node of nodes) {
    dist.set(node.key, Infinity)
  }

  dist.set(start.key, 0)
  path.set(start.key, null)

  function visit(node: Node, origin: Node) {
    if (node === start) {
      return
    }

    const weight = graph.getEdgeWeight(origin, node)
    dist.set(node.key, dist.get(origin.key) + weight) // weight should be 1 on unweighted graphs
    path.set(node.key, origin.key)
  }

  breadthFirstSearch(graph, start, visit)

  return {
    dist,
    path,
  }
}
