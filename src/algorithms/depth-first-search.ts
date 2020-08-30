import HashMap from '../data-structure/hashmap'
import Graph, { Node } from '../data-structure/graph'
import Stack from '../data-structure/stack'

// Non-recursive version
export function depthFirstSearch(
  graph: Graph,
  root: Node,
  callback: (nodeA: Node, nodeB: Node) => void
): void {
  const visited = new HashMap()
  const nodes = graph.getNodes()
  const stack = new Stack<Node>()

  for (const node of nodes) {
    visited.set(node.key, false)
  }

  visited.set(root.key, true)
  callback(root, null)
  stack.push(root)

  while (!stack.isEmpty()) {
    const node = stack.pop()
    const neighbors = graph.getNeighbors(node)

    for (const neighbor of neighbors) {
      if (!visited.get(neighbor.key)) {
        visited.set(neighbor.key, true)
        callback(neighbor, node)
        stack.push(neighbor)
      }
    }
  }
}

// Recursive version
export function depthFirstSearchRecursive(
  graph: Graph,
  root: Node,
  callback: (node: Node) => void
): void {
  const visited = new HashMap()
  const nodes = graph.getNodes()

  for (const node of nodes) {
    visited.set(node.key, false)
  }

  function visit(node: Node) {
    const neighbors = graph.getNeighbors(node)

    visited.set(node.key, true)
    callback(node)

    for (const neighbor of neighbors) {
      if (!visited.get(neighbor.key)) {
        visit(neighbor)
      }
    }
  }

  visit(root)
}
