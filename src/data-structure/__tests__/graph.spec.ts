import Graph, { Node } from '../graph'
import { dijkstra } from '../../algorithms/dijkstra'

describe('Shortest Path', () => {
  let graph: Graph
  let A: Node
  let B: Node
  let C: Node
  let D: Node

  beforeEach(() => {
    /**
     *    B
     *  ↗6  ↘1
     * A  ↑3  D
     *  ↘2  ↗5
     *    C
     */
    graph = new Graph()

    A = graph.createNode('A')
    B = graph.createNode('B')
    C = graph.createNode('C')
    D = graph.createNode('D')

    graph.addEdge(A, B, 6)
    graph.addEdge(A, C, 2)
    graph.addEdge(B, D, 1)
    graph.addEdge(C, B, 3)
    graph.addEdge(C, D, 5)
  })

  it('finds shortest path between two nodes using dijkstras algorithm', () => {
    const path = graph.findShortestPath(A, D, dijkstra)
    expect(path).toEqual(['A', 'C', 'B', 'D'])
  })

  it('finds shortest path between two nodes', () => {
    const path = graph.findShortestPath(A, D)
    expect(path).toEqual(['A', 'B', 'D'])
  })

  it('gets edge weight between two nodes', () => {
    expect(graph.getEdgeWeight(A, B)).toEqual(6)
  })

  it('does not get edge weight when there is not an edge', () => {
    expect(graph.getEdgeWeight(A, D)).toEqual(0)
  })

  it('generate a string representation of the graph', () => {
    expect(graph.toString()).toEqual(
      [
        'D: ',
        'A: {"node":{"key":"B"},"weight":6} -> {"node":{"key":"C"},"weight":2}',
        'C: {"node":{"key":"B"},"weight":3} -> {"node":{"key":"D"},"weight":5}',
        'B: {"node":{"key":"D"},"weight":1}',
      ].join('\n')
    )
  })
})
