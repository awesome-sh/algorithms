import Heap, { MinHeap, MaxHeap } from '../heap'

describe('Heap', () => {
  describe('Simple MinHeap', () => {
    let heap: Heap<number>

    beforeEach(() => {
      heap = new Heap<number>()
    })

    it('starts empty', () => {
      expect(heap.size()).toBe(0)
      expect(heap.isEmpty()).toBe(true)
    })

    it('adds element', () => {
      heap.add(5)

      expect(heap.size()).toBe(1)
      expect(heap.isEmpty()).toBe(false)
    })

    it('has the minimum element on the top', () => {
      heap.add(3)
      heap.add(1)
      heap.add(1) // with duplicate
      heap.add(2)

      expect(heap.peek()).toBe(1)
    })

    it('always remove the minimum element', () => {
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
      heap.add(4)
      heap.add(1)
      heap.add(2)
      heap.add(3)

      expect(heap.toString()).toBe('1,3,2,4')

      heap.remove(3)

      expect(heap.toString()).toBe('1,4,2')
    })

    it('stringifies the heap', () => {
      heap.add(3)
      heap.add(1)
      heap.add(2)

      expect(heap.toString()).toBe('1,3,2')
    })

    it('initializes from an existing array', () => {
      const heap = new Heap<number>([3, 1, 2])
      expect(heap.toString()).toBe('1,3,2')
    })
  })

  describe('Simple MaxHeap', () => {
    let heap: Heap<number>
    let comparator: (a: number, b: number) => number

    beforeEach(() => {
      comparator = (a: number, b: number) => b - a
      heap = new Heap<number>(null, comparator)
    })

    it('starts empty', () => {
      expect(heap.size()).toBe(0)
      expect(heap.isEmpty()).toBe(true)
    })

    it('adds element', () => {
      heap.add(5)

      expect(heap.size()).toBe(1)
      expect(heap.isEmpty()).toBe(false)
    })

    it('has the maximum element on the top', () => {
      heap.add(3)
      heap.add(1)
      heap.add(2)

      expect(heap.peek()).toBe(3)
    })

    it('always remove the maximum element', () => {
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
      heap.add(3)
      heap.add(1)
      heap.add(2)
      heap.add(4)

      expect(heap.toString()).toBe('4,3,2,1')

      heap.remove(3)

      expect(heap.toString()).toBe('4,1,2')
    })

    it('stringifies the heap', () => {
      heap.add(3)
      heap.add(1)
      heap.add(2)

      expect(heap.toString()).toBe('3,1,2')
    })

    it('initializes from an existing array', () => {
      const heap = new Heap<number>([3, 1, 2], comparator)
      expect(heap.toString()).toBe('3,1,2')
    })
  })

  describe('MinHeap', () => {
    let heap: MinHeap
    let item1
    let item2
    let item3
    let item4
    let item5

    beforeEach(() => {
      heap = new MinHeap()
      item1 = { value: 1 }
      item2 = { value: 2 }
      item3 = { value: 3 }
      item4 = { value: 4 }
      item5 = { value: 5 }
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

      expect(heap.toArray()).toEqual([{"value": 1}, {"value": 3}, {"value": 2}, {"value": 4}])

      heap.remove(item3)

      expect(heap.toArray()).toEqual([{"value": 1}, {"value": 4}, {"value": 2}])
    })

    it('stringifies the heap', () => {
      heap.add(item3)
      heap.add(item1)
      heap.add(item2)

      expect(heap.toArray()).toEqual([{"value": 1}, {"value": 3}, {"value": 2}])
    })

    it('initializes from an existing array', () => {
      const heap = new MinHeap([item3, item1, item2])
      expect(heap.toArray()).toEqual([{"value": 1}, {"value": 3}, {"value": 2}])
    })
  })

  describe('MaxHeap', () => {
    let heap: MaxHeap
    let item1
    let item2
    let item3
    let item4
    let item5

    beforeEach(() => {
      heap = new MaxHeap()
      item1 = { value: 1 }
      item2 = { value: 2 }
      item3 = { value: 3 }
      item4 = { value: 4 }
      item5 = { value: 5 }
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
      const heap = new MaxHeap([item3, item1, item2])
      expect(heap.toArray()).toEqual([item3, item1, item2])
    })
  })
})
