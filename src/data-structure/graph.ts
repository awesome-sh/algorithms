import HashMap from './hashmap'
import LinkedList from './linked-list'
import { calculateDistanceToNodes } from '../challenges/distance-to-nodes'

class Graph {
  _edges: HashMap
  _nodes: HashMap

  constructor () {
    this._nodes = new HashMap()
    this._edges = new HashMap()
  }

  createNode (key: string, value?: any) {
    const node = { key, value }

    this._nodes.set(key, node)
    this._edges.set(key, new LinkedList())

    return node
  }

  addEdge (startNode: Node, endNode: Node, weight: number = 1): void {
    // Adjacency List
    this._edges.get(startNode.key).append({ node: endNode, weight })
  }

  getEdge (nodeA: Node, nodeB: Node): Edge {
    const edges = this._getEdges(nodeA)

    for (const edge of edges) {
      if (edge.node === nodeB) {
        return edge
      }
    }

    return null
  }

  getNeighbors(node: Node) {
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

  getNodes (): any[] {
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

  findShortestPath (start: Node, end: Node, algorithm = calculateDistanceToNodes): string[] {
    const { prev } = algorithm(this, start)
    const result = []
    let { key } = end

    while (key) {
      result.unshift(key)
      key = prev[key]
    }

    return result
  }

  _getEdges (node: Node) {
    return this._edges.get(node.key)
  }
}

// Priority Queue?
export function findLowestCostKey (dist, visited) {
  const keys = Object.keys(dist)
  let lowestCost = Infinity
  let lowestCostKey = null

  for (const key of keys) {
    const cost = dist[key]

    if (cost < lowestCost && !visited[key]) {
      lowestCostKey = key
      lowestCost = cost
    }
  }

  return lowestCostKey
}

export type Node = {
  key: string
  value: any
}

export type Edge = {
  key: string
  value: any
  weight: number
}

export default Graph
