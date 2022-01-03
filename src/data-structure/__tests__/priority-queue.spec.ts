import { MinPriorityQueue, MaxPriorityQueue } from '../priority-queue'

describe('Priority Queue', () => {
  let item1
  let item2
  let item3
  let item4
  let item5

  beforeEach(() => {
    item1 = { priority: 1 }
    item2 = { priority: 2 }
    item3 = { priority: 3 }
    item4 = { priority: 4 }
    item5 = { priority: 5 }
  })

  describe('MinPriorityQueue', () => {
    let heap: MinPriorityQueue

    beforeEach(() => {
      heap = new MinPriorityQueue()
    })

    it('starts empty', () => {
      expect(heap.size()).toBe(0)
      expect(heap.isEmpty()).toBe(true)
    })

    it('adds element', () => {
      heap.add(item5)

      expect(heap.size()).toBe(1)
      expect(heap.isEmpty()).toBe(false)
    })

    it('has the minimum element on the top', () => {
      heap.add(item3)
      heap.add(item1)
      heap.add(item1) // with duplicate
      heap.add(item2)

      expect(heap.peek()).toBe(item1)
    })

    it('always remove the minimum element', () => {
      heap.add(item4)
      heap.add(item1)
      heap.add(item2)
      heap.add(item3)

      expect(heap.poll()).toBe(item1)
      expect(heap.poll()).toBe(item2)
      expect(heap.poll()).toBe(item3)
      expect(heap.poll()).toBe(item4)
    })

    it('removes an element in the middle', () => {
      heap.add(item4)
      heap.add(item1)
      heap.add(item2)
      heap.add(item3)

      expect(heap.toArray()).toEqual([item1, item3, item2, item4])

      heap.remove(item3)

      expect(heap.toArray()).toEqual([item1, item4, item2])
    })

    it('stringifies the heap', () => {
      heap.add(item3)
      heap.add(item1)
      heap.add(item2)

      expect(heap.toArray()).toEqual([item1, item3, item2])
    })

    it('initializes from an existing array', () => {
      const heap = new MinPriorityQueue([item3, item1, item2])
      expect(heap.toArray()).toEqual([item1, item3, item2])
    })
  })

  describe('MaxPriorityQueue', () => {
    let heap: MaxPriorityQueue

    beforeEach(() => {
      heap = new MaxPriorityQueue()
    })

    it('starts empty', () => {
      expect(heap.size()).toBe(0)
      expect(heap.isEmpty()).toBe(true)
    })

    it('adds element', () => {
      heap.add(item5)

      expect(heap.size()).toBe(1)
      expect(heap.isEmpty()).toBe(false)
    })

    it('has the maximum element on the top', () => {
      heap.add(item3)
      heap.add(item1)
      heap.add(item2)

      expect(heap.peek()).toBe(item3)
    })

    it('always remove the maximum element', () => {
      heap.add(item3)
      heap.add(item1)
      heap.add(item2)
      heap.add(item4)

      expect(heap.poll()).toBe(item4)
      expect(heap.poll()).toBe(item3)
      expect(heap.poll()).toBe(item2)
      expect(heap.poll()).toBe(item1)
    })

    it('removes an element in the middle', () => {
      heap.add(item3)
      heap.add(item1)
      heap.add(item2)
      heap.add(item4)

      expect(heap.toArray()).toEqual([item4, item3, item2, item1])

      heap.remove(item3)

      expect(heap.toArray()).toEqual([item4, item1, item2])
    })

    it('stringifies the heap', () => {
      heap.add(item3)
      heap.add(item1)
      heap.add(item2)

      expect(heap.toArray()).toEqual([item3, item1, item2])
    })

    it('initializes from an existing array', () => {
      const heap = new MaxPriorityQueue([item3, item1, item2])
      expect(heap.toArray()).toEqual([item3, item1, item2])
    })
  })
})
