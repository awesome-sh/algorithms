import Graph, { Node } from '../data-structure/graph'
import Queue from '../data-structure/queue'

const noop = () => {}

// Non-recursive version
export function breadthFirstSearch (graph: Graph, start: Node, callback: Function = noop) {
  const visited = {}
  const dist = {}
  const prev = {}
  const nodes = graph.getNodes()
  const queue = new Queue([start])

  for (const node of nodes) {
    visited[node.key] = false
    dist[node.key] = Infinity
  }

  dist[start.key] = 0
  prev[start.key] = null
  visited[start.key] = true

  callback(start)

  while (!queue.isEmpty()) {
    const node = queue.remove()
    const edges = graph.getEdges(node)

    for (const edge of edges) {
      const neighbor = edge.node

      if (!visited[neighbor.key]) {
        dist[neighbor.key] = dist[node.key] + edge.weight // weight should be 1 on unweighted graphs
        prev[neighbor.key] = node.key
        visited[neighbor.key] = true
        callback(neighbor)

        queue.add(neighbor)
      }
    }
  }

  return {
    dist,
    prev
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
