import Graph, { Node } from '../data-structure/graph'
import Queue from '../data-structure/queue'
import { noop } from '../utils'

// Non-recursive version
export function breadthFirstSearch (graph: Graph, root: Node, callback: Function = noop) {
  const visited = {}
  const nodes = graph.getNodes()
  const queue = new Queue([root])

  for (const node of nodes) {
    visited[node.key] = false
  }

  visited[root.key] = true
  callback(root, null)

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
export function breadthFirstSearchRecursive(root: TreeNode) {
  const q = new Queue();
  q.add(root);

  function visit(q: Queue) {
    if (q.isEmpty()) return;

    const n: TreeNode = q.remove()

    if (n.left) q.add(n.left)
    if (n.right) q.add(n.right)

    visit(q)
  }

  visit(q)
}

type TreeNode = {
  left: TreeNode
  right: TreeNode
}
