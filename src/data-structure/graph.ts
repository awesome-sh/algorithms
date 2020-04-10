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

  addEdge (startNode, endNode, weight = 1) {
    // Adjacency List
    this._edges.get(startNode.key).append({ node: endNode, weight })
  }

  getEdges (node) {
    return this._edges.get(node.key)
  }

  getNode (key) {
    return this._nodes.get(key)
  }

  getNodes () {
    return this._nodes.values()
  }

  toString () {
    const nodes = this.getNodes()
    let str = ''

    for (const node of nodes) {
      str += `${node.key} -> ${this.getEdges(node).toString()}\n`
    }

    return str
  }

  findShortestPath (start: Node, end: Node, algorithm = calculateDistanceToNodes) {
    const { prev } = algorithm(this, start)
    const result = []
    let { key } = end

    while (key) {
      result.unshift(key)
      key = prev[key]
    }

    return result
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

export default Graph
