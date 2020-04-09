import Graph, { Node } from '../data-structure/graph'
import Stack from '../data-structure/stack'

const noop = () => {}

// Recursive version
export function depthFirstSearch (graph: Graph, start: Node, callback: Function = noop) {
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

  visit(start)
}

// Non-recursive version
export function depthFirstSearchIter (graph: Graph, start: Node, callback: Function = noop) {
  const visited = {}
  const stack = new Stack([start])
  const nodes = graph.getNodes()

  for (const node of nodes) {
    visited[node.key] = false
  }

  visited[start.key] = true
  callback(start)

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