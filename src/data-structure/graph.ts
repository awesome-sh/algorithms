import HashMap from './hashmap'
import LinkedList from './linked-list'
import { calculateDistanceToNodes } from '../challenges/distance-to-nodes'

class Graph {
  _edges: HashMap<string, LinkedList<Edge>>
  _nodes: HashMap<string, Node>

  constructor () {
    this._edges = new HashMap<string, LinkedList<Edge>>()
    this._nodes = new HashMap<string, Node>()
  }

  createNode (key: string, data?: unknown): Node {
    const node: Node = { key, data }

    this._nodes.set(key, node)
    this._edges.set(key, new LinkedList())

    return node
  }

  addEdge (startNode: Node, endNode: Node, weight = 1): void {
    // Adjacency List
    this._edges.get(startNode.key).append({ node: endNode, weight })
  }

  getEdgeWeight (nodeA: Node, nodeB: Node): number {
    const edges = this._getEdges(nodeA)

    for (const edge of edges) {
      if (edge.node === nodeB) {
        return edge.weight
      }
    }

    return 0
  }

  getNeighbors(node: Node): Node[] {
    const neighbors = []
    const edges = this._getEdges(node)

    for (const edge of edges) {
      neighbors.push(edge.node)
    }

    return neighbors
  }

  getNode (key: string): Node {
    return this._nodes.get(key)
  }

  getNodes (): Node[] {
    return this._nodes.values()
  }

  toString (): string {
    const nodes = this.getNodes()
    const result = []

    for (const node of nodes) {
      result.push(`${node.key}: ${this._getEdges(node).toString()}`)
    }

    return result.join('\n')
  }

  findShortestPath (
    start: Node,
    end: Node,
    algorithm: (graph: Graph, node: Node) => { dist: HashMap<string, number>, path: HashMap<string, string|null> } = calculateDistanceToNodes
  ): string[] {
    const { path } = algorithm(this, start)
    const result = []
    let { key } = end

    while (key) {
      result.unshift(key)
      key = path.get(key)
    }

    return result
  }

  private _getEdges (node: Node): LinkedList<Edge> {
    return this._edges.get(node.key)
  }
}

export type Edge = {
  node: Node
  weight: number
}

export type Node = {
  key: string
  data: any
}

export default Graph
