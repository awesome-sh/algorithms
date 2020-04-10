import Graph, { Node } from '../../data-structure/graph'
import { depthFirstSearch, depthFirstSearchRecursive } from '../depth-first-search'

describe('Depth-First Search', () => {
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

  it('visits node by child recursively', () => {
    let visitOrder = ''
    const visit = (node: Node) => {
      visitOrder += node.key
    }

    depthFirstSearchRecursive(graph, C, visit)

    expect(visitOrder).toBe('CABFD')
  })

  it('visits node by child iteratively', () => {
    let visitOrder = ''
    const visit = (node: Node) => {
      visitOrder += node.key
    }

    depthFirstSearch(graph, C, visit)

    expect(visitOrder).toBe('CABFD')
  })
})
