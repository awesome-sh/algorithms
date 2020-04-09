import Graph from '../../data-structure/graph'
import { depthFirstSearch, depthFirstSearchIter } from '../depth-first-search'

describe('Depth-First Search', () => {
  let graph
  let A
  let B
  let C
  let D
  let E
  let F

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
    const visit = (node) => {
      visitOrder += node.key
    }

    depthFirstSearch(graph, C, visit)

    expect(visitOrder).toBe('CABFD')
  })

  it('visits node by child iteratively', () => {
    let visitOrder = ''
    const visit = (node) => {
      visitOrder += node.key
    }

    depthFirstSearchIter(graph, C, visit)

    expect(visitOrder).toBe('CABFD')
  })
})
