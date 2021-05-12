import HashMap from './hashmap'
import LinkedList from './linked-list'

class Graph {
  private edges: HashMap<string, LinkedList<Edge>>
  private nodes: HashMap<string, Node>

  constructor() {
    this.edges = new HashMap<string, LinkedList<Edge>>()
    this.nodes = new HashMap<string, Node>()
  }

  createNode(key: string, data?: unknown): Node {
    const node: Node = { key, data }

    this.nodes.set(key, node)
    this.edges.set(key, new LinkedList())

    return node
  }

  addEdge(startNode: Node, endNode: Node, weight = 1): void {
    // Adjacency List
    this.edges.get(startNode.key).append({ node: endNode, weight })
  }

  getEdgeWeight(nodeA: Node, nodeB: Node): number {
    const edges = this.getEdges(nodeA)

    for (const edge of edges) {
      if (edge.node === nodeB) {
        return edge.weight
      }
    }

    return 0
  }

  getNeighbors(node: Node): Node[] {
    const neighbors = []
    const edges = this.getEdges(node)

    for (const edge of edges) {
      neighbors.push(edge.node)
    }

    return neighbors
  }

  getNode(key: string): Node {
    return this.nodes.get(key)
  }

  getNodes(): Node[] {
    return this.nodes.values()
  }

  toString(): string {
    const nodes = this.getNodes()
    const result = []

    for (const node of nodes) {
      result.push(`${node.key}: ${this.getEdges(node).toString()}`)
    }

    return result.join('\n')
  }

  private getEdges(node: Node): LinkedList<Edge> {
    return this.edges.get(node.key)
  }
}

export type Edge = {
  node: Node
  weight: number
}

export type Node = {
  key: string
  data: unknown
}

export default Graph
