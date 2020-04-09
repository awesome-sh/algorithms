import Graph from '../../data-structure/graph'
import { dijkstra } from '../dijkstra'

describe('Dijkstra', () => {
  let graph
  let A
  let B
  let C
  let D

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

  it('finds shortest path between two nodes', () => {
    const { dist } = dijkstra(graph, A)
    expect(dist.D).toBe(6)
  })
})
