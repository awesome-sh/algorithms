import Graph, { Node } from '../data-structure/graph'
import Queue from '../data-structure/queue'
import { noop } from '../utils'

// Non-recursive version
export function breadthFirstSearch (graph: Graph, root: Node, callback: Function = noop): void {
  const visited = {}
  const nodes = graph.getNodes()
  const queue = new Queue()

  for (const node of nodes) {
    visited[node.key] = false
  }

  visited[root.key] = true
  callback(root, null)
  queue.add(root)

  while (!queue.isEmpty()) {
    const node = queue.remove()
    const neighbors = graph.getNeighbors(node)

    for (const neighbor of neighbors) {
      if (!visited[neighbor.key]) {
        visited[neighbor.key] = true
        callback(neighbor, node)
        queue.add(neighbor)
      }
    }
  }
}

// Recursive version
export function breadthFirstSearchRecursive(graph: Graph, root: Node, callback: Function = noop) {
  const visited = {}
  const nodes = graph.getNodes()
  const queue = new Queue()

  for (const node of nodes) {
    visited[node.key] = false
  }

  visited[root.key] = true
  callback(root)
  queue.add(root)

  function visit(queue: Queue) {
    if (queue.isEmpty()) return;

    const node: Node = queue.remove()
    const neighbors = graph.getNeighbors(node)

    for (const neighbor of neighbors) {
      if (!visited[neighbor.key]) {
        visited[neighbor.key] = true
        callback(neighbor)
        queue.add(neighbor)
      }
    }

    visit(queue)
  }

  visit(queue)
}
