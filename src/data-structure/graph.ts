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

  createNode (key: string, value?: any) {
    const node: Node = { key, value }

    this._nodes.set(key, node)
    this._edges.set(key, new LinkedList())

    return node
  }

  addEdge (startNode: Node, endNode: Node, weight: number = 1): void {
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
    let str = ''

    for (const node of nodes) {
      str += `${node.key} -> ${this._getEdges(node).toString()}\n`
    }

    return str
  }

  findShortestPath (start: Node, end: Node, algorithm: Function = calculateDistanceToNodes): string[] {
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
  value: any
}

export default Graph
