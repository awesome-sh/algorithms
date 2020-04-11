import Graph, { Node } from '../../data-structure/graph'
import { calculateDistanceToNodes } from '../distance-to-nodes'

describe('Breadth-First Search', () => {
  let graph: Graph
  let A: Node
  let B: Node
  let C: Node
  let D: Node
  let E: Node
  let F: Node

  beforeEach(() => {
    /**
     *     B ← E
     *  ↗  ↕ ↘
     * A ↔ C   F
     *  ↘
     *     D
     */
    graph = new Graph()

    A = graph.createNode('A')
    B = graph.createNode('B')
    C = graph.createNode('C')
    D = graph.createNode('D')
    E = graph.createNode('E')
    F = graph.createNode('F')

    graph.addEdge(A, B)
    graph.addEdge(A, C)
    graph.addEdge(A, D)
    graph.addEdge(B, C)
    graph.addEdge(B, F)
    graph.addEdge(C, A)
    graph.addEdge(C, B)
    graph.addEdge(E, B)
  })

  it('calculates distances from start to all other nodes', () => {
    const { dist } = calculateDistanceToNodes(graph, C)

    expect(dist.get('A')).toBe(1)
    expect(dist.get('B')).toBe(1)
    expect(dist.get('C')).toBe(0)
    expect(dist.get('D')).toBe(2)
    expect(dist.get('E')).toBe(Infinity)
    expect(dist.get('F')).toBe(2)
  })

  it('traces path from start node', () => {
    const { path } = calculateDistanceToNodes(graph, C)

    expect(path.get('A')).toBe('C')
    expect(path.get('B')).toBe('C')
    expect(path.get('C')).toBe(null)
    expect(path.get('D')).toBe('A')
    expect(path.get('F')).toBe('B')
  })
})
