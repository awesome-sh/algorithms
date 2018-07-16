const {MinHeap, MaxHeap} = require('../heap')

describe('Heap', () => {
  describe('MinHeap', () => {
    it('starts empty', () => {
      const heap = new MinHeap()

      expect(heap.size()).toBe(0)
      expect(heap.isEmpty()).toBe(true)
    })

    it('adds element', () => {
      const heap = new MinHeap()

      heap.add(5)

      expect(heap.size()).toBe(1)
      expect(heap.isEmpty()).toBe(false)
    })

    it('has the minimum element on the top', () => {
      const heap = new MinHeap()

      heap.add(3)
      heap.add(1)
      heap.add(2)

      expect(heap.peek()).toBe(1)
    })

    it('always remove the minium element', () => {
      const heap = new MinHeap()

      heap.add(3)
      heap.add(1)
      heap.add(2)

      expect(heap.poll()).toBe(1)
      expect(heap.poll()).toBe(2)
      expect(heap.poll()).toBe(3)
    })
  })

  describe('MaxHeap', () => {
    it('starts empty', () => {
      const heap = new MaxHeap()

      expect(heap.size()).toBe(0)
      expect(heap.isEmpty()).toBe(true)
    })

    it('adds element', () => {
      const heap = new MaxHeap()

      heap.add(5)

      expect(heap.size()).toBe(1)
      expect(heap.isEmpty()).toBe(false)
    })

    it('has the maximum element on the top', () => {
      const heap = new MaxHeap()

      heap.add(3)
      heap.add(1)
      heap.add(2)

      expect(heap.peek()).toBe(3)
    })

    it('always remove the maximum element', () => {
      const heap = new MaxHeap()

      heap.add(3)
      heap.add(1)
      heap.add(2)

      expect(heap.poll()).toBe(3)
      expect(heap.poll()).toBe(2)
      expect(heap.poll()).toBe(1)
    })
  })
})
