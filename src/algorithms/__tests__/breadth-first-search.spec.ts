import Graph from '../../data-structure/graph'
import { breadthFirstSearch } from '../breadth-first-search'

describe('Breadth-First Search', () => {
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

  it('visits node by level', () => {
    let visitOrder = ''
    const visit = (node) => {
      visitOrder += node.key
    }

    breadthFirstSearch(graph, C, visit)

    expect(visitOrder).toBe('CABDF')
  })

  it('calculates distances from start to all other nodes', () => {
    const { dist } = breadthFirstSearch(graph, C)
    expect(dist).toEqual({ A: 1, B: 1, C: 0, D: 2, E: Infinity, F: 2 })
  })

  it('traces path from start node', () => {
    const { prev } = breadthFirstSearch(graph, C)
    expect(prev).toEqual({ A: 'C', B: 'C', C: null, D: 'A', F: 'B' })
  })
})
