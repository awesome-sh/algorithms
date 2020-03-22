const { Graph, breadthFirstSearch, depthFirstSearch, depthFirstSearchIter, dijkstra } = require('../graph')

describe('Graph', () => {
  describe('Non-Weighted', () => {
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

    it('finds shortest path between two nodes', () => {
      const path = graph.findShortestPath(C, D, breadthFirstSearch)
      expect(path).toEqual(['C', 'A', 'D'])
    })

    describe('Breadth-First Search', () => {
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

    describe('Depth-First Search', () => {
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
  })

  describe('Weighted', () => {
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
      const path = graph.findShortestPath(A, D, dijkstra)
      expect(path).toEqual(['A', 'C', 'B', 'D'])
    })

    describe('Dijkstra', () => {
      it('finds shortest path between two nodes', () => {
        const { dist } = dijkstra(graph, A)
        expect(dist.D).toBe(6)
      })
    })
  })
})
