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
  callback(root, null)

  while (!stack.isEmpty()) {
    const node = stack.pop()
    const neighbors = graph.getNeighbors(node)

    for (const neighbor of neighbors) {
      if (!visited[neighbor.key]) {
        visited[neighbor.key] = true
        callback(neighbor, node)

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
    const neighbors = graph.getNeighbors(node)

    visited[node.key] = true
    callback(node)

    for (const neighbor of neighbors) {
      if (!visited[neighbor.key]) {
        visit(neighbor)
      }
    }
  }

  visit(root)
}