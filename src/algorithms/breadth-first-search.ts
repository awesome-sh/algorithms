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
  callback(root, null, null)

  while (!queue.isEmpty()) {
    const node = queue.remove()
    const edges = graph.getEdges(node)

    for (const edge of edges) {
      const neighbor = edge.node

      if (!visited[neighbor.key]) {
        visited[neighbor.key] = true
        callback(neighbor, node, edge)

        queue.add(neighbor)
      }
    }
  }
}

export function breadthFirstSearchRecursive(root: TreeNode) {
  function recursive(q: Queue) {
    if (q.isEmpty()) return;

    const n: TreeNode = q.remove()

    if (n.left) q.add(n.left)
    if (n.right) q.add(n.right)

    recursive(q)
  }

  const q = new Queue();
  q.add(root);
  recursive(q)
}

type TreeNode = {
  left: TreeNode
  right: TreeNode
}
