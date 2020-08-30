import HashMap from '../data-structure/hashmap'
import Graph, { Node } from '../data-structure/graph'
import Queue from '../data-structure/queue'

// Non-recursive version
export function breadthFirstSearch(
  graph: Graph,
  root: Node,
  callback: (nodeA: Node, nodeB: Node) => void
): void {
  const visited = new HashMap()
  const nodes = graph.getNodes()
  const queue = new Queue<Node>()

  for (const node of nodes) {
    visited.set(node.key, false)
  }

  visited.set(root.key, true)
  callback(root, null)
  queue.add(root)

  while (!queue.isEmpty()) {
    const node = queue.remove()
    const neighbors = graph.getNeighbors(node)

    for (const neighbor of neighbors) {
      if (!visited.get(neighbor.key)) {
        visited.set(neighbor.key, true)
        callback(neighbor, node)
        queue.add(neighbor)
      }
    }
  }
}

// Recursive version
export function breadthFirstSearchRecursive(
  graph: Graph,
  root: Node,
  callback: (node: Node) => void
): void {
  const visited = new HashMap()
  const nodes = graph.getNodes()
  const queue = new Queue<Node>()

  for (const node of nodes) {
    visited.set(node.key, false)
  }

  visited.set(root.key, true)
  callback(root)
  queue.add(root)

  function visit(queue: Queue<Node>) {
    if (queue.isEmpty()) return

    const node: Node = queue.remove()
    const neighbors = graph.getNeighbors(node)

    for (const neighbor of neighbors) {
      if (!visited.get(neighbor.key)) {
        visited.set(neighbor.key, true)
        callback(neighbor)
        queue.add(neighbor)
      }
    }

    visit(queue)
  }

  visit(queue)
}
