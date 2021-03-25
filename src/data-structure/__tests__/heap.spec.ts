import Heap from '../heap'

describe('Heap', () => {
  describe('MinHeap', () => {
    it('starts empty', () => {
      const comparator = (a, b) => a - b
      const heap = new Heap<number>(comparator)

      expect(heap.size()).toBe(0)
      expect(heap.isEmpty()).toBe(true)
    })

    it('adds element', () => {
      const comparator = (a, b) => a - b
      const heap = new Heap<number>(comparator)

      heap.add(5)

      expect(heap.size()).toBe(1)
      expect(heap.isEmpty()).toBe(false)
    })

    it('has the minimum element on the top', () => {
      const comparator = (a, b) => a - b
      const heap = new Heap<number>(comparator)

      heap.add(3)
      heap.add(1)
      heap.add(2)

      expect(heap.peek()).toBe(1)
    })

    it('always remove the minimum element', () => {
      const comparator = (a, b) => a - b
      const heap = new Heap<number>(comparator)

      heap.add(4)
      heap.add(1)
      heap.add(2)
      heap.add(3)

      expect(heap.poll()).toBe(1)
      expect(heap.poll()).toBe(2)
      expect(heap.poll()).toBe(3)
      expect(heap.poll()).toBe(4)
    })

    it('removes an element in the middle', () => {
      const comparator = (a, b) => a - b
      const heap = new Heap<number>(comparator)

      heap.add(4)
      heap.add(1)
      heap.add(2)
      heap.add(3)

      expect(heap.toString()).toBe('1,3,2,4')

      heap.remove(3)

      expect(heap.toString()).toBe('1,4,2')
    })

    it('stringifies the heap', () => {
      const comparator = (a, b) => a - b
      const heap = new Heap<number>(comparator)

      heap.add(3)
      heap.add(1)
      heap.add(2)

      expect(heap.toString()).toBe('1,3,2')
    })
  })

  describe('MaxHeap', () => {
    it('starts empty', () => {
      const comparator = (a, b) => b - a
      const heap = new Heap<number>(comparator)

      expect(heap.size()).toBe(0)
      expect(heap.isEmpty()).toBe(true)
    })

    it('adds element', () => {
      const comparator = (a, b) => b - a
      const heap = new Heap<number>(comparator)

      heap.add(5)

      expect(heap.size()).toBe(1)
      expect(heap.isEmpty()).toBe(false)
    })

    it('has the maximum element on the top', () => {
      const comparator = (a, b) => b - a
      const heap = new Heap<number>(comparator)

      heap.add(3)
      heap.add(1)
      heap.add(2)

      expect(heap.peek()).toBe(3)
    })

    it('always remove the maximum element', () => {
      const comparator = (a, b) => b - a
      const heap = new Heap<number>(comparator)

      heap.add(3)
      heap.add(1)
      heap.add(2)
      heap.add(4)

      expect(heap.poll()).toBe(4)
      expect(heap.poll()).toBe(3)
      expect(heap.poll()).toBe(2)
      expect(heap.poll()).toBe(1)
    })

    it('removes an element in the middle', () => {
      const comparator = (a, b) => b - a
      const heap = new Heap<number>(comparator)

      heap.add(3)
      heap.add(1)
      heap.add(2)
      heap.add(4)

      expect(heap.toString()).toBe('4,3,2,1')

      heap.remove(3)

      expect(heap.toString()).toBe('4,1,2')
    })

    it('stringifies the heap', () => {
      const comparator = (a, b) => b - a
      const heap = new Heap<number>(comparator)

      heap.add(3)
      heap.add(1)
      heap.add(2)

      expect(heap.toString()).toBe('3,1,2')
    })
  })
})
