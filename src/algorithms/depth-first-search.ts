import Graph, { Node } from '../data-structure/graph'
import Stack from '../data-structure/stack'
import { noop } from '../utils'

// Non-recursive version
export function depthFirstSearch (graph: Graph, root: Node, callback: Function = noop) {
  const visited = {}
  const nodes = graph.getNodes()
  const stack = new Stack([root])

  for (const node of nodes) {
    visited[node.key] = false
  }

  visited[root.key] = true
  callback(root)

  while (!stack.isEmpty()) {
    const node = stack.pop()
    const edges = graph.getEdges(node)

    for (const edge of edges) {
      const neighbor = edge.node

      if (!visited[neighbor.key]) {
        visited[neighbor.key] = true
        callback(neighbor)

        stack.push(neighbor)
      }
    }
  }
}


// Recursive version
export function depthFirstSearchRecursive (graph: Graph, root: Node, callback: Function = noop) {
  const visited = {}
  const nodes = graph.getNodes()

  for (const node of nodes) {
    visited[node.key] = false
  }

  function visit (node) {
    const edges = graph.getEdges(node)

    visited[node.key] = true
    callback(node)

    for (const edge of edges) {
      const neighbor = edge.node

      if (!visited[neighbor.key]) {
        visit(neighbor)
      }
    }
  }

  visit(root)
}